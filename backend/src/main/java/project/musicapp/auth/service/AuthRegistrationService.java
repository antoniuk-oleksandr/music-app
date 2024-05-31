package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;
import project.musicapp.auth.dto.JwtTokenDTO;
import project.musicapp.auth.dto.RegistrationRequestDTO;
import project.musicapp.auth.dto.RegistrationResponseDTO;
import project.musicapp.auth.mapper.RegistrationRequestMapper;
import project.musicapp.auth.utils.AccessTokenUtils;
import project.musicapp.auth.utils.RefreshTokenUtils;

@Service
@RequiredArgsConstructor
public class AuthRegistrationService {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final AccessTokenUtils accessTokenUtils;
    private final RefreshTokenUtils refreshTokenUtils;

    public ResponseEntity<?> registration(RegistrationRequestDTO registrationReq){
        String username = registrationReq.getUsername();
        if(this.userService.findUserByUsername(username).isPresent()){
           return ResponseEntity.badRequest().body("Username already exists");
        }

        User user = mapToUserWithEncodedPassword(registrationReq);
        String refreshToken = generateRefreshToken(username);

        this.userService.createUser(user);
        this.refreshTokenUtils.saveNewRefreshToken(user, refreshToken);

        return registrationResponse(username, refreshToken);
    }

    private User mapToUserWithEncodedPassword(RegistrationRequestDTO registrationUserDTO){
        String password = this.passwordEncoder.encode(registrationUserDTO.getPassword());
        return new RegistrationRequestMapper(registrationUserDTO, password).toUser();
    }

    private JwtTokenDTO generateToken(String username) {
        return this.accessTokenUtils.generateAccessToken(username);
    }

    private String generateRefreshToken(String username) {
        return this.refreshTokenUtils.generateRefreshToken(username);
    }

    private ResponseEntity<?> registrationResponse(String username, String refreshToken){
        JwtTokenDTO accessToken = generateToken(username);
        return ResponseEntity.ok().body(
            new RegistrationResponseDTO(accessToken, refreshToken)
        );
    }
}
