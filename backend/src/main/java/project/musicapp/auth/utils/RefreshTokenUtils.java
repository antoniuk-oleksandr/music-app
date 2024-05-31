package project.musicapp.auth.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.model.User;
import project.musicapp.auth.model.RefreshToken;
import project.musicapp.auth.repository.RefreshTokenRepository;


@Service
@RequiredArgsConstructor
public class RefreshTokenUtils {
    private final TokenUtils tokenUtils;
    private final RefreshTokenRepository refreshTokenRepository;

    public String generateRefreshToken(String username) {
        return this.tokenUtils.generateRefreshToken(username);
    }

    public void saveNewRefreshToken(User user, String refreshToken) {
        this.refreshTokenRepository.save(RefreshToken.builder()
            .user(user).refreshToken(refreshToken).build()
        );
    }

    public void updateExistingRefreshToken(User user, String refreshToken) {
        RefreshToken refreshTokenEntity = this.refreshTokenRepository.findRefreshTokenByUser(user)
                .orElseThrow(() -> new IllegalStateException("User don't have refresh token"));

        refreshTokenEntity.setRefreshToken(refreshToken);
        this.refreshTokenRepository.save(refreshTokenEntity);
    }
}
