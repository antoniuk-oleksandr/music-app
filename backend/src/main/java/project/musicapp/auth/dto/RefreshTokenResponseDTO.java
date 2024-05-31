package project.musicapp.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class RefreshTokenResponseDTO {
    private String jwt;
}
