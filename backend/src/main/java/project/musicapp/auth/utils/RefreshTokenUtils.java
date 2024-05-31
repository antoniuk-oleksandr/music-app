package project.musicapp.auth.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;
import project.musicapp.auth.model.RefreshToken;
import project.musicapp.auth.repository.RefreshTokenRepository;

import java.time.Duration;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RefreshTokenUtils {
    private final UserService userService;
    private final TokenUtils tokenUtils;
    private final RefreshTokenRepository refreshTokenRepository;

    public RefreshToken createRefreshTokenByUsername(String username) {
        String refreshToken = this.tokenUtils.generateRefreshToken(username);
        User user = this.userService.findUserByUsername(username).orElseThrow();

        Optional<RefreshToken> existingTokenOpt = refreshTokenRepository.findRefreshTokenByUser(user);
        return existingTokenOpt.map(token -> updateExistingRefreshToken(token, refreshToken))
                .orElseGet(() -> saveNewRefreshToken(user, refreshToken));
    }

    private RefreshToken saveNewRefreshToken(User user, String refreshToken) {
        return this.refreshTokenRepository.save(RefreshToken.builder()
                .user(user).refreshToken(refreshToken).build()
        );
    }

    private RefreshToken updateExistingRefreshToken(RefreshToken refreshTokenEntity,
                                                    String refreshToken) {
        refreshTokenEntity.setRefreshToken(refreshToken);
        return this.refreshTokenRepository.save(refreshTokenEntity);
    }

    private String generateRefreshTokenByUsername(String username) {
        return this.tokenUtils.generateRefreshToken(username);
    }
}
