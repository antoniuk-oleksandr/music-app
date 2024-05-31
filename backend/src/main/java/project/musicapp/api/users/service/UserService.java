package project.musicapp.api.users.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.dto.UserBannerDTO;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.model.User;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserQueryService userQueryService;

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

    public void createUser(User userDTO) {
        this.userQueryService.createUser(userDTO);
    }
}
