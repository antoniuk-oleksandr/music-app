package project.musicapp.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.email.dto.SendCodeDTO;
import project.musicapp.api.email.service.EmailService;
import project.musicapp.api.users.service.UserService;
import project.musicapp.auth.dto.RegistrationRequestDTO;
import project.musicapp.auth.utils.HtmlMessageUtils;

@Service
@RequiredArgsConstructor
public class RegistrationRequestService {
    private final UserService userService;
    private final EmailService emailService;
    private final HtmlMessageUtils htmlMessageUtils;

    public ResponseEntity<?> registrationRequest(RegistrationRequestDTO registrationReq) {
        String username = registrationReq.getUsername(), email = registrationReq.getEmail();

        if (this.userService.findUserByUsername(username).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        if (this.userService.findUserByEmail(email).isPresent()){
            return ResponseEntity.badRequest().body("Email already exists");
        }

        return this.emailService.sendEmailWithGeneratedCode(
            new SendCodeDTO(email, username, this.htmlMessageUtils.getHtmlMessage())
        );
    }
}
