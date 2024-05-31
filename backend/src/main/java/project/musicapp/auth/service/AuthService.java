package project.musicapp.auth.service;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.auth.dto.LoginRequestDTO;
import project.musicapp.auth.dto.RegistrationRequestDTO;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthLoginService authLoginService;
    private final AuthRegistrationService authRegistrationService;
    private final AuthRefreshTokenService authRefreshTokenService;

    public ResponseEntity<?> login(LoginRequestDTO authRequest) {
        return this.authLoginService.login(authRequest);
    }

    public ResponseEntity<?> registration(RegistrationRequestDTO registrationUserDTO){
        return this.authRegistrationService.registration(registrationUserDTO);
    }

    public ResponseEntity<?> refreshToken(HttpServletRequest request) {
        return this.authRefreshTokenService.refreshToken(request);
    }
}