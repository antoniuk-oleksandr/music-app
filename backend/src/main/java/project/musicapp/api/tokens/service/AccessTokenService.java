package project.musicapp.api.tokens.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import project.musicapp.api.tokens.dto.JwtTokenDTO;

import java.sql.Timestamp;

@Component
@RequiredArgsConstructor
public class AccessTokenService {
    private final TokenService tokenUtils;

    public JwtTokenDTO generateAccessToken(String username) {
        String token = this.tokenUtils.generateAccessToken(username);
        Timestamp timestamp = this.tokenUtils.getExpirationFromToken(token);
        return new JwtTokenDTO(token, timestamp);
    }

    public JwtTokenDTO generateAccessTokenFromRefreshToken(String refreshToken) {
        String username = this.tokenUtils.getUsernameFromToken(refreshToken);
        return this.generateAccessToken(username);
    }
}
