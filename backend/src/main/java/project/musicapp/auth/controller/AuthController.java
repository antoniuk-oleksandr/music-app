package project.musicapp.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.musicapp.auth.dto.UserAuthDTO;
import project.musicapp.auth.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserAuthDTO user) {
        return authService.login(user);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestBody UserAuthDTO user) {
        return authService.login(user);
    }
}
