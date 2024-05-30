package project.musicapp.auth.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.musicapp.api.users.dto.RegistrationUserDTO;
import project.musicapp.auth.dto.JwtRequestDTO;
import project.musicapp.auth.service.AuthService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody JwtRequestDTO userAuthDTO) {
        return this.authService.login(userAuthDTO);
    }

    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody RegistrationUserDTO userAuthDTO) {
        return this.authService.registration(userAuthDTO);
    }
}
