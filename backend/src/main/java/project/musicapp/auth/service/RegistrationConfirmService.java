package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.musicapp.api.email.dto.ConfirmCodeDTO;
import project.musicapp.api.email.service.EmailService;
import project.musicapp.api.tokens.dto.JwtTokenDTO;
import project.musicapp.api.tokens.service.AccessTokenService;
import project.musicapp.api.tokens.service.RefreshTokenService;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.service.UserService;
import project.musicapp.auth.dto.RegistrationConfirmDTO;
import project.musicapp.auth.dto.RegistrationResponseDTO;
import project.musicapp.auth.mapper.RegistrationRequestMapper;

@Service
@RequiredArgsConstructor
public class RegistrationConfirmService {
    private final UserService userService;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;
    private final AccessTokenService accessTokenService;
    private final RefreshTokenService refreshTokenService;

    public ResponseEntity<?> registrationConfirm(RegistrationConfirmDTO regConfirmDTO) {
        String username = regConfirmDTO.getUsername();

        if(this.userService.findUserByUsername(username).isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You are already registered");
        }

        String refreshToken = generateRefreshToken(username);
        User user = mapToUserWithEncodedPassword(regConfirmDTO);

        ResponseEntity<?> emailServiceResponse = this.emailService.confirmEmailCode(
            new ConfirmCodeDTO(user.getEmail(), regConfirmDTO.getCode())
        );

        if(emailServiceResponse.getStatusCode().equals(HttpStatus.OK)) {
            this.userService.createUser(user);
            this.refreshTokenService.saveNewRefreshToken(user, refreshToken);
        } else {
            return emailServiceResponse;
        }

        return registrationResponse(user, refreshToken);
    }

    private User mapToUserWithEncodedPassword(RegistrationConfirmDTO registrationUserDTO){
        String password = this.passwordEncoder.encode(registrationUserDTO.getPassword());
        return new RegistrationRequestMapper(registrationUserDTO, password).toUser();
    }

    private JwtTokenDTO generateToken(String username) {
        return this.accessTokenService.generateAccessToken(username);
    }

    private String generateRefreshToken(String username) {
        return this.refreshTokenService.generateRefreshToken(username);
    }

    private ResponseEntity<?> registrationResponse(User user, String refreshToken){
        JwtTokenDTO accessToken = generateToken(user.getUsername());
        return ResponseEntity.ok().body(
            new RegistrationResponseDTO(accessToken, refreshToken)
        );
    }
}
