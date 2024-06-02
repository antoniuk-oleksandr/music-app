package project.musicapp.api.tokens.service;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.tokens.dto.JwtTokenDTO;
import project.musicapp.api.tokens.dto.RefreshTokenResponseDTO;
import project.musicapp.api.tokens.model.RefreshToken;
import project.musicapp.api.tokens.repository.RefreshTokenRepository;
import project.musicapp.api.users.model.User;

@Service
@RequiredArgsConstructor
public class RefreshTokenService {
    private final TokenService tokenUtils;
    private final AccessTokenService accessTokenService;
    private final RefreshTokenRepository refreshTokenRepository;

    public String generateRefreshToken(String username) {
        return this.tokenUtils.generateRefreshToken(username);
    }

    public void saveNewRefreshToken(User user, String refreshToken) {
        this.refreshTokenRepository.save(RefreshToken.builder()
            .user(user).refreshToken(refreshToken).build()
        );
    }

    public void updateExistingRefreshToken(User user, String refreshToken) {
        RefreshToken refreshTokenEntity = this.refreshTokenRepository.findRefreshTokenByUser(user)
                .orElseThrow(() -> new IllegalStateException("User doesn't have refresh token"));

        refreshTokenEntity.setRefreshToken(refreshToken);
        this.refreshTokenRepository.save(refreshTokenEntity);
    }

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
        return getRefreshTokenResponse(refreshToken);
    }

    private String extractTokenFromRequest(HttpServletRequest request) {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring("Bearer ".length());
        }
        return null;
    }

    private JwtTokenDTO generateNewAccessToken(String refreshToken) {
        return this.accessTokenService.generateAccessTokenFromRefreshToken(refreshToken);
    }

    private ResponseEntity<?> getRefreshTokenResponse(String refreshToken) {
        return ResponseEntity.ok().body(
            new RefreshTokenResponseDTO(generateNewAccessToken(refreshToken))
        );
    }
}
