package project.musicapp.api.users.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegistrationUserDTO {
    private String username;
    private String password;
    private String confirmPassword;
    private String email;
    private String avatarPath;
    private String bannerPath;
    private Boolean isArtist;
}
