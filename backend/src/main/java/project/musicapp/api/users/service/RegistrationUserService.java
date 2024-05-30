package project.musicapp.api.users.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.dto.RegistrationUserDTO;
import project.musicapp.api.users.model.User;

@Service
@RequiredArgsConstructor
public class RegistrationUserService {
    private final PasswordEncoder passwordEncoder;
    private final UserQueryService userQueryService;

    public ResponseEntity<?> createUser(RegistrationUserDTO userDTO) {
        if(!userDTO.getPassword().equals(userDTO.getConfirmPassword())){
            return ResponseEntity.badRequest().body("Passwords do not match");
        }
        return this.userQueryService.createUser(User.builder()
                .username(userDTO.getUsername())
                .password(passwordEncoder.encode(userDTO.getPassword()))
                .email(userDTO.getEmail())
                .avatar(userDTO.getAvatarPath())
                .banner(userDTO.getBannerPath()).build()
        );
    }
}
