package project.musicapp.api.subscribe.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.subscribe.model.Subscribe;
import project.musicapp.api.subscribe.repo.SubscribeRepository;
import project.musicapp.api.tokens.service.AccessTokenService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;

@Service
@RequiredArgsConstructor
public class SubscribeService {
    private final UserService userService;
    private final AccessTokenService accessTokenService;
    private final SubscribeRepository subscribeRepository;

    public ResponseEntity<?> subscribeToUser(HttpHeaders headers, int followedId) {
        User followed = this.userService.findUserByUserId(followedId).orElseThrow(
            () -> new IllegalArgumentException("User doesn't exist")
        );
        User follower = getUserFromTokenInHeaders(headers);
        Subscribe subscribe = mapToSubscribe(follower, followed);
        if(!isSubscribed(follower, followed)) {
            this.subscribeRepository.save(subscribe);
            return ResponseEntity.ok().body(subscribe);
        }
        return ResponseEntity.badRequest().body("You are already subscribed to this user");
    }

    public ResponseEntity<?> unsubscribeToUser(HttpHeaders headers, int followedId) {
        User followed = this.userService.findUserByUserId(followedId).orElseThrow(
            () -> new IllegalArgumentException("User doesn't exist")
        );
        User follower = getUserFromTokenInHeaders(headers);
        Subscribe subscribe = findByFollowerIdAndFollowedId(follower, followed);
        if(isSubscribed(follower, followed)){
            this.subscribeRepository.delete(subscribe);
        }
        return ResponseEntity.ok().body(subscribe);
    }

    private Subscribe findByFollowerIdAndFollowedId(User follower, User followed) {
        return this.subscribeRepository.findByFollowerIdAndFollowedId(
            follower.getId(), followed.getId()
        ).orElseThrow(
            () -> new IllegalArgumentException("User doesn't exist")
        );
    }

    private Boolean isSubscribed(User follower, User followed){
        return this.subscribeRepository.findByFollowerIdAndFollowedId(
            follower.getId(), followed.getId()
        ).isPresent();
    }

    private Subscribe mapToSubscribe(User follower, User followed) {
        return Subscribe.builder()
                .follower(follower)
                .followed(followed).build();
    }

    private User getUserFromTokenInHeaders(HttpHeaders headers) {
        String accessToken = this.accessTokenService.extractTokenFromHeaders(headers);
        return this.userService.getUserFromAccessToken(accessToken).orElseThrow(
            () -> new IllegalArgumentException("Invalid access token")
        );
    }
}
