package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.dto.RegistrationUserDTO;
import project.musicapp.api.users.service.UserService;
import project.musicapp.auth.dto.JwtRequestDTO;
import project.musicapp.auth.dto.JwtResponseDTO;
import project.musicapp.auth.utils.AuthUtils;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthUtils authUtils;
    private final UserService userService;

    public ResponseEntity<?> login(JwtRequestDTO authRequest) {
        this.authUtils.authenticateJwtRequest(authRequest);
        String token = this.authUtils.generateToken(
            this.authUtils.getUserDetails(authRequest.getUsername())
        );
        return ResponseEntity.ok().body(new JwtResponseDTO(token));
    }

    public ResponseEntity<?> registration(RegistrationUserDTO registrationUserDTO){
        return this.userService.createUser(registrationUserDTO);
    }
}