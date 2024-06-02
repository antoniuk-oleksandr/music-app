package project.musicapp.api.tokens.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.musicapp.api.tokens.service.RecoveryTokenService;
import project.musicapp.api.tokens.service.RefreshTokenService;

@RestController
@RequestMapping("/tokens")
@RequiredArgsConstructor
public class TokenController {
    private final RefreshTokenService refreshTokenService;
    private final RecoveryTokenService recoveryTokenService;

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) {
        return this.refreshTokenService.refreshToken(request);
    }

    @PostMapping("/recovery-token")
    public ResponseEntity<?> recoveryToken(HttpServletRequest request) {
        return this.recoveryTokenService.recoveryToken(request);
    }
}
