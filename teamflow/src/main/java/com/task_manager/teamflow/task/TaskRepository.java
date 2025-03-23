package com.task_manager.teamflow.task;

import com.task_manager.teamflow.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByProjectId(Long projectId);

    List<Task> findByAssigneesId(Integer userId);

    List<Task> findByStatus(TaskStatus status);

    List<Task> findByProjectIdAndAssigneesId(Long projectId, Long userId);

}