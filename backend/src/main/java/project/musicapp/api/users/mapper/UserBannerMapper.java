package project.musicapp.api.users.mapper;

import project.musicapp.api.users.dto.UserBannerDTO;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.model.User;


public class UserBannerMapper {
    public UserBannerDTO convertToUserBannerDTO(User user) {
        return UserBannerDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .avatarPath(user.getAvatar())
                .bannerPath(user.getBanner()).build();

    }
}
