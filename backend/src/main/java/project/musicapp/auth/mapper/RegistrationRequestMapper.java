package project.musicapp.auth.mapper;

import lombok.AllArgsConstructor;
import project.musicapp.api.users.model.User;
import project.musicapp.auth.dto.RegistrationConfirmDTO;

@AllArgsConstructor
public class RegistrationRequestMapper {
    private final RegistrationConfirmDTO registrationRequestDTO;
    private final String encodedPassword;

    public User toUser() {
        return User.builder()
            .username(registrationRequestDTO.getUsername())
            .password(encodedPassword)
            .email(registrationRequestDTO.getEmail())
            .avatar("/images/default-avatar.jpg")
            .banner("/images/default-banner.jpg")
            .isArtist(false)
        .build();
    }
}
