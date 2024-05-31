package project.musicapp.auth.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import project.musicapp.auth.dto.JwtTokenDTO;

import java.sql.Timestamp;

@Component
@RequiredArgsConstructor
public class AccessTokenUtils {
    private final TokenUtils tokenUtils;

    public JwtTokenDTO generateAccessToken(String username) {
        String token = this.tokenUtils.generateToken(username);
        Timestamp timestamp = this.tokenUtils.getExpirationFromToken(token);
        return new JwtTokenDTO(token, timestamp);
    }
}
