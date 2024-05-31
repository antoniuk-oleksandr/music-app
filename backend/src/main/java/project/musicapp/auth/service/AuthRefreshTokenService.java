package project.musicapp.auth.service;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import project.musicapp.auth.dto.RefreshTokenResponseDTO;
import project.musicapp.auth.utils.AuthUtils;
import project.musicapp.auth.utils.TokenUtils;

@Service
@RequiredArgsConstructor
public class AuthRefreshTokenService {
    private final AuthUtils authUtils;
    private final TokenUtils tokenUtils;
    private final UserDetailsService userDetailsService;

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

        String newAccessToken = generateNewAccessToken(refreshToken);
        return ResponseEntity.ok().body(new RefreshTokenResponseDTO(newAccessToken));
    }

    private String extractTokenFromRequest(HttpServletRequest request) {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring("Bearer ".length());
        }
        return null;
    }

    private String generateNewAccessToken(String refreshToken) {
        String username = tokenUtils.getUsernameFromToken(refreshToken);
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        return authUtils.generateAccessToken(userDetails);
    }
}
