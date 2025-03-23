package com.task_manager.teamflow.project;

import com.task_manager.teamflow.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
    List<Project> findByOwner(User owner);
    Optional<Project> findById(Long id);
}
