package com.task_manager.teamflow.project;

import com.task_manager.teamflow.auth.AuthenticationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("projects")
@RequiredArgsConstructor
@Tag(name = "Projects")
public class ProjectController {
    private final ProjectService service;

    @PostMapping
    public ResponseEntity<Project> create(
            @RequestBody @Valid
            ProjectRequest request,
            Principal principal
    ){
        Project project= service.createProject(
                request.getTitle(),
                request.getDescription(),
                principal.getName(),
                request.getTeamEmails()
        );
        return ResponseEntity.ok(project);
    }

    @GetMapping("/my")
    public ResponseEntity<List<Project>> getMyProjects(Principal principal){
        return ResponseEntity.ok(
          service.getProjectsByOwner(principal.getName())
        );
    }
}
