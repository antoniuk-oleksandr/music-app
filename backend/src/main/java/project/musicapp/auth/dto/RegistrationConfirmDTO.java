package project.musicapp.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegistrationConfirmDTO {
    private String username;
    private String email;
    private String password;
    private int code;
}
