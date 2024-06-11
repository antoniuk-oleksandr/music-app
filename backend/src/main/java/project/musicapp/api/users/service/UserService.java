package project.musicapp.api.users.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.musicapp.api.tokens.service.AccessTokenService;
import project.musicapp.api.users.dto.UserBannerDTO;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.model.User;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserQueryService userQueryService;
    private final AccessTokenService accessTokenService;

    public UserBannerDTO findUserBannerById(int id){
        return this.userQueryService.findUserBannerById(id);
    }

    public List<UserDTO> findAllUsersBySongId(int id) {
        return this.userQueryService.findAllUsersBySongId(id);
    }

    public List<UserDTO> findAllUsersByUsernameAndFlag(String value, int limit, int offset, boolean isArtist) {
        return this.userQueryService.findAllUsersByUsernameAndFlag(value, limit, offset, isArtist);
    }

    public Optional<User> findUserByUsername(String username) {
        return this.userQueryService.findUserByUsername(username);
    }

    public Optional<User> findUserByEmail(String email) {
        return this.userQueryService.findUserByEmail(email);
    }

    public Optional<User> findUserByUsernameEmail(String usernameEmail){
        return this.userQueryService.findUserByUsernameEmail(usernameEmail);
    }

    public Optional<User> findUserByUserId(int userId) {
        return this.userQueryService.findUserById(userId);
    }

    public void createUser(User userDTO) {
        this.userQueryService.createUser(userDTO);
    }

    public void updateUserBannerByUserId(int id, String banner) {
        this.userQueryService.updateUserBannerByUserId(id, banner);
    }

    public void updateUserAvatarByUserId(int id, String avatar) {
        this.userQueryService.updateUserAvatarByUserId(id, avatar);
    }

    public Optional<User> getUserFromAccessToken(String accessToken) {
        String username = this.accessTokenService.getUsernameFromToken(accessToken);
        return findUserByUsername(username);
    }

    public void setTrueIsArtistForUser(int userId) {
        this.userQueryService.setTrueIsArtistForUser(userId);
    }
}
