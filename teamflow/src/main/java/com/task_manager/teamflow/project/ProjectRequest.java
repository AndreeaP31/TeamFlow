package com.task_manager.teamflow.project;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.util.List;

@Data
public class ProjectRequest {
    @NotEmpty(message="Title is mandatory")
    @NotBlank(message="Title is mandatory")
    private String title;
    private String Description;
    private List<String> teamEmails;
}
