package project.musicapp.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class LoginResponseDTO {
    private String jwt;
    private String refresh;
}
