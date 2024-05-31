package project.musicapp.auth.mapper;

import lombok.AllArgsConstructor;
import project.musicapp.api.users.model.User;
import project.musicapp.auth.dto.RegistrationRequestDTO;

@AllArgsConstructor
public class RegistrationRequestMapper {
    private final RegistrationRequestDTO registrationRequestDTO;
    private final String encodedPassword;

    public User toUser() {
        return User.builder()
            .username(registrationRequestDTO.getUsername())
            .password(encodedPassword)
            .email(registrationRequestDTO.getEmail())
            .avatar("/avatars/empty.jpg")
            .banner("/banners/empty.jpg")
            .isArtist(false)
        .build();
    }
}
