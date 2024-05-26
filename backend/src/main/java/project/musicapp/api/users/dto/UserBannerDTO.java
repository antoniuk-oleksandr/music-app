package project.musicapp.api.users.dto;

import lombok.*;

@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserBannerDTO {
    private Integer id;
    private String username;
    private String avatarPath;
    private String bannerPath;
}
