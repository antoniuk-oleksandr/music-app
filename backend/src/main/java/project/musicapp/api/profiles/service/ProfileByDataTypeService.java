package project.musicapp.api.profiles.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.profiles.dto.ProfileDTO;
import project.musicapp.api.profiles.dto.ProfileUserDTO;
import project.musicapp.api.profiles.type.ProfileType;
import project.musicapp.api.tokens.service.AccessTokenService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;

@Service
@RequiredArgsConstructor
public class ProfileByDataTypeService {
    private final UserService userService;
    private final AccessTokenService accessTokenService;
    private final ProfileQueryService profileQueryService;

    public ResponseEntity<?> getProfileUserById(HttpHeaders headers, int id){
        String accessToken = this.accessTokenService.extractTokenFromHeaders(headers);
        if(accessToken == null) {
            return getResponseEntity(id, null);
        }
        return getResponseEntity(id, isSubscribedUserFromTokenInHeadersToUserId(headers, id));
    }

    private ResponseEntity<?> getResponseEntity(int id, Boolean isSubscribed) {
        return ResponseEntity.ok().body(ProfileUserDTO
                .builder().isSubscribed(isSubscribed)
                .user(this.profileQueryService.findUserBannerByUserId(id))
                .songs(this.profileQueryService.findUserSongsByUserId(id, 5, 0))
                .albums(this.profileQueryService.findAlbumsByUserId(id, 6, 0))
                .playlists(this.profileQueryService.findPlaylistsByUserId(id, 6, 0)).build());
    }

    public ProfileDTO getProfileByTypeAndUserId(String type, int userId, int limit, int offset){
        ProfileType profileType = ProfileType.valueOf(type.toUpperCase());

        return switch (profileType) {
            case SONGS -> ProfileDTO.builder()
                    .songs(this.profileQueryService.findUserSongsByUserId(userId, limit, offset))
                    .build();
            case ALBUMS -> ProfileDTO.builder()
                    .albums(this.profileQueryService.findAlbumsByUserId(userId, limit, offset))
                    .build();
            case PLAYLISTS -> ProfileDTO.builder()
                    .playlists(this.profileQueryService.findPlaylistsByUserId(userId, limit, offset))
                    .build();
        };
    }

    private Boolean isSubscribedUserFromTokenInHeadersToUserId(HttpHeaders headers, int userId){
        User me = this.userService.getUserFromTokenInHeaders(headers);
        User toUser = this.userService.findUserByUserId(userId).orElseThrow(
            () -> new IllegalStateException("User does not exist")
        );
        return this.profileQueryService.isSubscribedTo(me, toUser);
    }
}
