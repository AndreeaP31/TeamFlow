package com.task_manager.teamflow.task;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import lombok.Data;
import lombok.Getter;

@Getter
public enum TaskStatus {
    TODO("To Do"),
    IN_PROGRESS("In Progress"),
    DONE("Done"),
    BLOCKED("Blocked");

    private final String label;

    TaskStatus(String label) {
        this.label = label;
    }
}

