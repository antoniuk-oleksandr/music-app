package project.musicapp.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class LoginRequestDTO {
    private String password;
    private String usernameEmail;
}
