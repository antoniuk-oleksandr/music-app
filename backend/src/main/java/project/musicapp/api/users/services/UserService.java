package project.musicapp.api.users.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.mapper.UserMapper;
import project.musicapp.api.users.models.User;
import project.musicapp.api.users.repositories.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ResponseEntity<UserDTO> getUserById(Integer id) {
        User user = this.userRepository.findById(id).orElse(null);

        if(user == null) {
            return ResponseEntity.notFound().build();
        }

        UserMapper userMapper = new UserMapper(user);
        return ResponseEntity.ok().body(userMapper.toUserDTO());
    }
}
