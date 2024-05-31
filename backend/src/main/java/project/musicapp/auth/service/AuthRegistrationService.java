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
import project.musicapp.auth.model.RefreshToken;
import project.musicapp.auth.utils.RefreshTokenUtils;
import project.musicapp.auth.utils.TokenUtils;

import java.sql.Timestamp;

@Service
@RequiredArgsConstructor
public class AuthRegistrationService {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final TokenUtils tokenUtils;
    private final RefreshTokenUtils refreshTokenUtils;

    public ResponseEntity<?> registration(RegistrationRequestDTO registrationUserDTO){
        String username = registrationUserDTO.getUsername();
        if(userService.findUserByUsername(username).isPresent()){
           return ResponseEntity.badRequest().body("Username already exists");
        }

        String password = passwordEncoder.encode(registrationUserDTO.getPassword());
        User user = new RegistrationRequestMapper(registrationUserDTO, password).toUser();

        this.userService.createUser(user);
        RefreshToken refreshToken = this.refreshTokenUtils.createRefreshTokenByUsername(username);

        return ResponseEntity.ok().body(new RegistrationResponseDTO(
            generateToken(username), refreshToken.getRefreshToken()
        ));
    }

    private JwtTokenDTO generateToken(String username) {
        String accessToken = tokenUtils.generateToken(username);
        Timestamp timestamp = tokenUtils.getExpirationFromToken(accessToken);
        return new JwtTokenDTO(accessToken, timestamp);
    }
}
