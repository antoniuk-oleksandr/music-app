package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.dto.RegistrationUserDTO;
import project.musicapp.api.users.service.UserService;

@Service
@RequiredArgsConstructor
public class AuthRegistrationService {
    private final UserService userService;

    public ResponseEntity<?> registration(RegistrationUserDTO registrationUserDTO){
        return this.userService.createUser(registrationUserDTO);
    }
}
