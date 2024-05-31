package project.musicapp.auth.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.musicapp.api.users.dto.RegistrationUserDTO;
import project.musicapp.auth.dto.LoginRequestDTO;
import project.musicapp.auth.service.AuthService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO userAuthDTO) {
        return this.authService.login(userAuthDTO);
    }

    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody RegistrationUserDTO userAuthDTO) {
        return this.authService.registration(userAuthDTO);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) {
        return this.authService.refreshToken(request);
    }
}
