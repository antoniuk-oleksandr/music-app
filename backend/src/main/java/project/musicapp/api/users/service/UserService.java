package project.musicapp.api.users.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.dto.UserBannerDTO;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.model.User;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserQueryService userQueryService;

    @Autowired
    public UserService(UserQueryService userQueryService) {
        this.userQueryService = userQueryService;
    }

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
}
