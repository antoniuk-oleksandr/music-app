package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
        String usernameEmail = loginRequest.getUsernameEmail();
        User user = userService.findUserByUsernameEmail(usernameEmail)
                .orElseThrow(() -> new UsernameNotFoundException(loginRequest.getUsernameEmail()));
        try {
            authenticateJwtRequest(user.getUsername(), loginRequest.getPassword());
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
        JwtTokenDTO accessToken = generateAccessToken(user);
        String refreshToken = generateRefreshToken(user);

        this.refreshTokenService.updateExistingRefreshToken(user, refreshToken);
        return getLoginResponseEntity(accessToken, refreshToken);
    }

    private void authenticateJwtRequest(String username, String password) {
        this.authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                username, password
            )
        );
    }

    private User findUserByUsernameEmail(String usernameEmail) {
        return this.userService.findUserByUsernameEmail(usernameEmail).orElseThrow(
            () -> new IllegalStateException("User with username or email" + usernameEmail + " not found")
        );
    }

    private JwtTokenDTO generateAccessToken(User user) {
        return this.accessTokenUtils.generateAccessToken(user.getUsername());
    }

    private String generateRefreshToken(User user) {
        return this.refreshTokenService.generateRefreshToken(user.getUsername());
    }

    private ResponseEntity<?> getLoginResponseEntity(JwtTokenDTO accessToken, String refreshToken) {
        return ResponseEntity.ok().body(new LoginResponseDTO(accessToken, refreshToken));
    }
}
