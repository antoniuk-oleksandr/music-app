package project.musicapp.api.users.mapper;

import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.models.User;

public class UserMapper {
    private final User user;

    public UserMapper(User user) {
        this.user = user;
    }

    public UserDTO toUserDTO() {
        return UserDTO.builder()
                .username(this.user.getUsername())
                .avatar(this.user.getAvatar())
                .banner(this.user.getBanner())
                .build();
    }
}
