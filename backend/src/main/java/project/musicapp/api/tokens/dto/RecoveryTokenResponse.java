package project.musicapp.api.tokens.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class RecoveryTokenResponse {
    private JwtTokenDTO recoveryToken;
}
