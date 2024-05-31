package project.musicapp.api.users.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.dto.UserBannerDTO;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.mapper.UserBannerMapper;
import project.musicapp.api.users.mapper.UserMapper;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.repository.UserRepository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserQueryService {
    private final UserRepository userRepository;

    public UserBannerDTO findUserBannerById(int id){
        User user = this.userRepository.findById(id).orElse(null);
        return new UserBannerMapper().convertToUserBannerDTO(Objects.requireNonNull(user));
    }

    public List<UserDTO> findAllUsersBySongId(int id) {
        List<User> users = this.userRepository.findAllUsersBySongId(id);
        return new UserMapper(users).toUserDTOs();
    }

    public List<UserDTO> findAllUsersByUsernameAndFlag(String value, int limit, int offset, boolean isArtist) {
        List<User> users = this.userRepository.findAllUsersByUsernameAndByIsArtist(value, limit, offset, isArtist);
        return new UserMapper(users).toUserDTOs();
    }

    public Optional<User> findUserByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    public Optional<User> findUserByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    public Optional<User> findUserByUsernameEmail(String usernameEmail){
        if (findUserByUsername(usernameEmail).isPresent()){
            return this.userRepository.findByUsername(usernameEmail);
        }
        return this.userRepository.findByEmail(usernameEmail);
    }

    public void createUser(User user) {
        if(this.userRepository.findByUsername(user.getUsername()).isEmpty()) {
            this.userRepository.save(user);
        }
    }
}
