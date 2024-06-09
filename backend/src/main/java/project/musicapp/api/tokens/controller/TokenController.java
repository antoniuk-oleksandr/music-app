package project.musicapp.api.tokens.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
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
    public ResponseEntity<?> refreshToken(@RequestHeader HttpHeaders request) {
        return this.refreshTokenService.refreshToken(request);
    }

    @PostMapping("/recovery-token")
    public ResponseEntity<?> recoveryToken(@RequestHeader HttpHeaders request) {
        return this.recoveryTokenService.recoveryToken(request);
    }
}
