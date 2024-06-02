package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.auth.dto.LoginRequestDTO;
import project.musicapp.auth.dto.RegistrationConfirmDTO;
import project.musicapp.auth.dto.RegistrationRequestDTO;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthLoginService authLoginService;
    private final RegistrationRequestService registrationRequestService;
    private final RegistrationConfirmService registrationConfirmService;

    public ResponseEntity<?> login(LoginRequestDTO authRequest) {
        return this.authLoginService.login(authRequest);
    }

    public ResponseEntity<?> registrationRequest(RegistrationRequestDTO registrationUserDTO) {
        return this.registrationRequestService.registrationRequest(registrationUserDTO);
    }

    public ResponseEntity<?> registrationConfirm(RegistrationConfirmDTO registrationConfirmDTO) {
        return this.registrationConfirmService.registrationConfirm(registrationConfirmDTO);
    }
}