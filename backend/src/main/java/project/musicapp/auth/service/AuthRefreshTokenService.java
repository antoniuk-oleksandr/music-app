package project.musicapp.auth.service;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.auth.dto.JwtTokenDTO;
import project.musicapp.auth.dto.RefreshTokenResponseDTO;
import project.musicapp.auth.utils.AccessTokenUtils;
import project.musicapp.auth.utils.TokenUtils;

@Service
@RequiredArgsConstructor
public class AuthRefreshTokenService {
    private final TokenUtils tokenUtils;
    private final AccessTokenUtils accessTokenUtils;

    public ResponseEntity<?> refreshToken(HttpServletRequest request) {
        String refreshToken = extractTokenFromRequest(request);

        if (refreshToken == null) {
            return ResponseEntity.badRequest().body("Invalid or missing authorization header");
        }

        if (!tokenUtils.validateToken(refreshToken)) {
            return ResponseEntity.badRequest().body("Invalid or expired refresh token");
        }

        if (tokenUtils.isAccessToken(refreshToken)) {
            return ResponseEntity.badRequest().body("Cannot create a refresh token for an access token");
        }

        return ResponseEntity.ok().body(
            new RefreshTokenResponseDTO(generateNewAccessToken(refreshToken))
        );
    }

    private String extractTokenFromRequest(HttpServletRequest request) {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring("Bearer ".length());
        }
        return null;
    }

    private JwtTokenDTO generateNewAccessToken(String refreshToken) {
        String username = this.tokenUtils.getUsernameFromToken(refreshToken);
        return this.accessTokenUtils.generateAccessToken(username);
    }
}
