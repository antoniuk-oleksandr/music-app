package project.musicapp.api.users.mapper;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.model.User;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
public class UserMapper {
    private List<User> users;

    public List<UserDTO> toUserDTOs() {
        return users.stream().map(this::toUserDTO).collect(Collectors.toList());
    }

    public UserDTO toUserDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .avatarPath(user.getAvatar())
                .build();
    }
}
