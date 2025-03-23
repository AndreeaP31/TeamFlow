package com.task_manager.teamflow.project;

import com.task_manager.teamflow.user.User;
import com.task_manager.teamflow.user.UserRepository;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    @Transactional
    public Project createProject(
            String title,
            String description,
            String ownerEmail,
            List<String> memberEmails
    ){
        User owner= userRepository.findByEmail(ownerEmail)
                .orElseThrow(()-> new RuntimeException("Owner not found"));
        List<User> members=userRepository.findAllByEmailIn(memberEmails);

        Project project=Project.builder()
                .title(title)
                .description(description)
                .owner(owner)
                .teamMembers(members)
                .build();
        return projectRepository.save(project);
    }

    public List<Project> getProjectsByOwner(String ownerEmail){
        User owner=userRepository.findByEmail(ownerEmail)
                .orElseThrow(()->new RuntimeException("User not found"));
        return projectRepository.findByOwner(owner);

    }
}
