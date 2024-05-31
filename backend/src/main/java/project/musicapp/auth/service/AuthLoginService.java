package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.auth.dto.LoginRequestDTO;
import project.musicapp.auth.dto.LoginResponseDTO;
import project.musicapp.auth.model.RefreshToken;
import project.musicapp.auth.utils.AuthUtils;
import project.musicapp.auth.utils.RefreshTokenUtils;

@Service
@RequiredArgsConstructor
public class AuthLoginService {
    private final AuthUtils authUtils;
    private final RefreshTokenUtils refreshTokenService;

    public ResponseEntity<?> login(LoginRequestDTO authRequest) {
        this.authUtils.authenticateJwtRequest(authRequest);

        String username = authRequest.getUsername();
        String token = this.authUtils.generateAccessToken(
                this.authUtils.getUserDetails(username)
        );

        RefreshToken refreshToken = this.refreshTokenService.createRefreshTokenByUsername(username);
        return ResponseEntity.ok().body(
                new LoginResponseDTO(token, refreshToken.getRefreshToken())
        );
    }
}
