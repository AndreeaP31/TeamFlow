package com.task_manager.teamflow.project;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.task_manager.teamflow.task.Task;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import com.task_manager.teamflow.user.User;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="_project")
@EntityListeners(AuditingEntityListener.class)
public class Project {
    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    private User owner;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<User> teamMembers;

    @OneToMany(mappedBy = "project", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Task> tasks;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;



}
