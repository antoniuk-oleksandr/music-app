package project.musicapp.api.tokens.service;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import project.musicapp.api.tokens.dto.JwtTokenDTO;
import project.musicapp.api.tokens.type.TokenType;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;

import java.sql.Timestamp;
import java.time.Duration;
import java.util.HashMap;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccessTokenService extends TokenService {
    @Value("${jwt.accessToken.lifetime}")
    private Duration accessToken;

    public JwtTokenDTO generateAccessToken(String username) {
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("type", TokenType.ACCESS_TOKEN);
        String token = createToken(claims, username, accessToken);
        Timestamp timestamp = getExpirationFromToken(token);
        return new JwtTokenDTO(token, timestamp);
    }

    public boolean isAccessToken(String token) {
        Claims claims = parseToken(token);
        return TokenType.ACCESS_TOKEN.name().equals(claims.get("type"));
    }

    public JwtTokenDTO generateAccessTokenFromRefreshToken(String refreshToken) {
        String username = getUsernameFromToken(refreshToken);
        return this.generateAccessToken(username);
    }
}
