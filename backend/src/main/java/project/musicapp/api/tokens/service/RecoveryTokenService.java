package project.musicapp.api.tokens.service;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.tokens.dto.JwtTokenDTO;
import project.musicapp.api.tokens.dto.RecoveryTokenResponse;
import project.musicapp.api.tokens.type.TokenType;

import java.sql.Timestamp;
import java.time.Duration;
import java.util.HashMap;

@Service
public class RecoveryTokenService extends TokenService {
    @Value("${jwt.recoveryToken.lifetime}")
    private Duration recoveryTokenLifetime;

    public ResponseEntity<?> recoveryToken(HttpHeaders headers) {
        return null;
    }

    public boolean isRecoveryToken(String token) {
        Claims claims = parseToken(token);
        return TokenType.RECOVERY_TOKEN.name().equals(claims.get("type"));
    }

    private JwtTokenDTO generateRecoveryToken(String username) {
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("type", TokenType.RECOVERY_TOKEN);
        String token = createToken(claims, username, recoveryTokenLifetime);
        Timestamp timestamp = getExpirationFromToken(token);
        return new JwtTokenDTO(token, timestamp);
    }

    private ResponseEntity<?> getRecoveryTokenResponse(String username) {
        return ResponseEntity.ok().body(
            new RecoveryTokenResponse(generateRecoveryToken(username))
        );
    }
}
