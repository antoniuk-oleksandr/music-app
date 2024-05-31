package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;
import project.musicapp.auth.dto.JwtTokenDTO;
import project.musicapp.auth.dto.LoginRequestDTO;
import project.musicapp.auth.dto.LoginResponseDTO;
import project.musicapp.auth.utils.AccessTokenUtils;
import project.musicapp.auth.utils.RefreshTokenUtils;

@Service
@RequiredArgsConstructor
public class AuthLoginService {
    private final UserService userService;
    private final AccessTokenUtils accessTokenUtils;
    private final RefreshTokenUtils refreshTokenService;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<?> login(LoginRequestDTO loginRequest) {
        try {
            authenticateJwtRequest(loginRequest);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        String username = loginRequest.getUsernameEmail();
        JwtTokenDTO accessToken = generateAccessToken(username);
        String refreshToken = generateRefreshToken(username);

        User user = findUserByUsername(username);
        this.refreshTokenService.saveNewRefreshToken(user, refreshToken);

        return getLoginResponseEntity(accessToken, refreshToken);
    }

    private void authenticateJwtRequest(LoginRequestDTO authRequest) {
        this.authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                authRequest.getUsernameEmail(), authRequest.getPassword()
            )
        );
    }

    private User findUserByUsername(String username) {
        return this.userService.findUserByUsername(username).orElseThrow(
            () -> new IllegalStateException("User with username " + username + " not found")
        );
    }

    private JwtTokenDTO generateAccessToken(String username) {
        return this.accessTokenUtils.generateAccessToken(username);
    }

    private String generateRefreshToken(String username) {
        return this.refreshTokenService.generateRefreshToken(username);
    }

    private ResponseEntity<?> getLoginResponseEntity(JwtTokenDTO accessToken, String refreshToken) {
        return ResponseEntity.ok().body(new LoginResponseDTO(accessToken, refreshToken));
    }
}
