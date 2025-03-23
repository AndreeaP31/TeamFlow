package com.task_manager.teamflow.task;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class TaskRequest {
    @NotEmpty(message="Title is mandatory")
    @NotBlank(message="Title is mandatory")
    private String title;
    private String description;
    private LocalDate deadline;
    private TaskStatus status;
    private Long projectId;
    private List<String> assigneeEmails;
}
