package com.task_manager.teamflow.task;


import com.task_manager.teamflow.project.Project;
import com.task_manager.teamflow.project.ProjectRepository;
import com.task_manager.teamflow.user.User;
import com.task_manager.teamflow.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    @Transactional
    public Task createTask(TaskRequest request){
        Project project= projectRepository.findById(request.getProjectId())
                .orElseThrow(()-> new RuntimeException("Project not found"));
        List<User> assignees=userRepository.findAllByEmailIn(request.getAssigneeEmails());

        Task task= Task.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .deadline(request.getDeadline())
                .status(request.getStatus()!=null? request.getStatus():TaskStatus.TODO)
                .project(project)
                .assignees(assignees)
                .build();
        return taskRepository.save(task);

    }

    public List<Task> getTasksByProject(Long projectId){
        return taskRepository.findByProjectId(projectId);
    }

    @Transactional
    public Task updateTaskStatus(Long taskId, TaskStatus newStatus, String userEmail) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        boolean isAssignee = task.getAssignees().stream()
                .anyMatch(user -> user.getEmail().equals(userEmail));

        if (!isAssignee) {
            throw new RuntimeException("Unauthorized: You are not an assignee for this task.");
        }

        task.setStatus(newStatus);
        return taskRepository.save(task);
    }

    public List<Task> getTasksByAssigneeEmail(String email){
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("User not found"));
        return taskRepository.findByAssigneesId(user.getId());
    }


}
