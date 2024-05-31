package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;
import project.musicapp.auth.dto.JwtTokenDTO;
import project.musicapp.auth.dto.LoginRequestDTO;
import project.musicapp.auth.dto.LoginResponseDTO;
import project.musicapp.auth.model.RefreshToken;
import project.musicapp.auth.utils.AccessTokenUtils;
import project.musicapp.auth.utils.RefreshTokenUtils;

import java.sql.Timestamp;

@Service
@RequiredArgsConstructor
public class AuthLoginService {
    private final AccessTokenUtils accessTokenUtils;
    private final RefreshTokenUtils refreshTokenService;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<?> login(LoginRequestDTO authRequest) {
        authenticateJwtRequest(authRequest);

        String username = authRequest.getUsername();

        RefreshToken refreshToken = this.refreshTokenService.createRefreshTokenByUsername(username);
        return ResponseEntity.ok().body(
            new LoginResponseDTO(
                generateAccessToken(username), refreshToken.getRefreshToken()
            )
        );
    }

    private void authenticateJwtRequest(LoginRequestDTO authRequest) {
        try {
            this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        } catch (AuthenticationException e) {
            ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    private JwtTokenDTO generateAccessToken(String username) {
        return this.accessTokenUtils.generateAccessToken(username);
    }
}
