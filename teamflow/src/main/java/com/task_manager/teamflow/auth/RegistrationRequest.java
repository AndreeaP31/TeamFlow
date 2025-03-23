package com.task_manager.teamflow.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegistrationRequest {


    @NotEmpty(message="Fisrtname is mandatory")
    @NotBlank(message="Fisrtname is mandatory")
    private String firstname;

    @NotEmpty(message="Lastname is mandatory")
    @NotBlank(message="Lastname is mandatory")
    private String lastname;
    @Email(message="Email is not valid")
    @NotEmpty(message="Email is mandatory")
    @NotBlank(message="Email is mandatory")
    private String email;
    @NotEmpty(message="Password is mandatory")
    @NotBlank(message="Password is mandatory")
    @Size(min=5, message="Password should be 5 characters minimum")
    private String password;

    @NotBlank(message = "Role is mandatory")
    private String role;

}
