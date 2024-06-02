package project.musicapp.auth.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.musicapp.auth.dto.LoginRequestDTO;
import project.musicapp.auth.dto.RegistrationConfirmDTO;
import project.musicapp.auth.dto.RegistrationRequestDTO;
import project.musicapp.auth.service.AuthService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO userAuthDTO) {
        return this.authService.login(userAuthDTO);
    }

    @PostMapping("/registration-request")
    public ResponseEntity<?> registrationRequest(@RequestBody RegistrationRequestDTO regRequestDTO) {
        return this.authService.registrationRequest(regRequestDTO);
    }

    @PostMapping("/registration-confirm")
    public ResponseEntity<?> registrationConfirm(@RequestBody RegistrationConfirmDTO regConfirmDTO) {
        return this.authService.registrationConfirm(regConfirmDTO);
    }
}
