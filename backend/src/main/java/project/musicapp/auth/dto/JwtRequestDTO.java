package project.musicapp.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class JwtRequestDTO {
    private String username;
    private String password;
}
