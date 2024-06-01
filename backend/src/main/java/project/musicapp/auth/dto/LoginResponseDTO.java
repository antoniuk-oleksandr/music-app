package project.musicapp.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import project.musicapp.api.tokens.dto.JwtTokenDTO;

@Getter @Setter
@AllArgsConstructor
public class LoginResponseDTO {
    private JwtTokenDTO jwt;
    private String refresh;
}
