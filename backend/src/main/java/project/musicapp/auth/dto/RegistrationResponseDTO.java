package project.musicapp.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class RegistrationResponseDTO {
    private JwtTokenDTO jwt;
    private String refresh;
}
