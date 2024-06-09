package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.profiles.dto.ProfileMeDTO;
import project.musicapp.api.tokens.service.AccessTokenService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;

@Service
@RequiredArgsConstructor
public class ProfileByTokenService {
    private final UserService userService;
    private final AccessTokenService accessTokenService;

    public ResponseEntity<?> getProfileInfoByToken(HttpHeaders headers) {
        String accessToken = this.accessTokenService.extractTokenFromHeaders(headers);
        return getResponseEntity(accessToken);
    }

    private ResponseEntity<?> getResponseEntity(String accessToken) {
        User user = this.userService.getUserFromAccessToken(accessToken).orElseThrow(
            () -> new IllegalStateException("Could not find user with access token " + accessToken)
        );
        return ResponseEntity.ok().body(
            new ProfileMeDTO(user.getId(), user.getUsername(), user.getAvatar())
        );
    }
}
