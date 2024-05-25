package project.musicapp.api.users.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.mapper.UserMapper;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> findAllUsersBySongId(int id) {
        List<User> users = this.userRepository.findAllUsersBySongId(id);
        return new UserMapper(users).toUserDTOs();
    }

    public List<UserDTO> findAllUsersByUsernameAndFlag(String value, int limit, int offset, boolean isArtist) {
        List<User> users = this.userRepository.findAllUsersByUsernameAndByIsArtist(value, limit, offset, isArtist);
        UserMapper userMapper = new UserMapper(users);
        return userMapper.toUserDTOs();
    }
}
