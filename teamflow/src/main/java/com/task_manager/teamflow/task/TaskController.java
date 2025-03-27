package com.task_manager.teamflow.task;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("tasks")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;
    @PostMapping
    public ResponseEntity<Task> createTask(
            @RequestBody TaskRequest request
    ){
        return ResponseEntity.ok(taskService.createTask(request));
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Task>> getByProject(
            @PathVariable Long projectId
    ){
        return ResponseEntity.ok(taskService.getTasksByProject(projectId));

    }
    @GetMapping("/my")
    public ResponseEntity<List<Task>> getMyTasks(Principal principal){
        return ResponseEntity.ok(taskService.getTasksByAssigneeEmail(principal.getName()));

    }
    @PatchMapping("/{taskId}/status")
    public ResponseEntity<Task> updateStatus(
            @PathVariable Long taskId,
            @RequestBody TaskStatus newStatus, // ✅ direct TaskStatus (enum)
            Principal principal
    ) {
        Task updatedTask = taskService.updateTaskStatus(taskId, newStatus, principal.getName());
        return ResponseEntity.ok(updatedTask);
    }

}
