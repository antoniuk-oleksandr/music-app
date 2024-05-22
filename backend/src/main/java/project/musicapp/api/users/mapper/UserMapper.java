package project.musicapp.api.users.mapper;

import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.model.User;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

public class UserMapper {
    private final List<User> users;

    public UserMapper(List<User> users) {
        this.users = users;
    }

    public List<UserDTO> toUserDTO() {
        HashSet<UserDTO> uniqueUsers = new HashSet<>();
        for (User userSong : users) {
            UserDTO userDTO = mapToUserDTO(userSong);
            uniqueUsers.add(userDTO);
        }
        return new ArrayList<>(uniqueUsers);
    }

    private UserDTO mapToUserDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .avatar(user.getAvatar())
                .banner(user.getBanner())
                .build();
    }
}
