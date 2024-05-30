package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.auth.dto.UserAuthDTO;

@Service
@RequiredArgsConstructor
public class AuthService {
    public ResponseEntity<String> login(UserAuthDTO user) {
        return null;
    }
}
