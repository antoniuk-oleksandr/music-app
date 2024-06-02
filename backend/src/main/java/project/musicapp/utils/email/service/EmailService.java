package project.musicapp.utils.email.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.utils.email.dto.ConfirmCodeDTO;
import project.musicapp.auth.dto.RegistrationRequestDTO;
import project.musicapp.utils.email.dto.SendCodeDTO;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final ConfirmCodeService codeService;
    private final SendCodeService sendCodeService;

    public ResponseEntity<?> sendEmailWithGeneratedCode(SendCodeDTO messageDTO) {
        return this.sendCodeService.sendEmailWithGeneratedCode(messageDTO);
    }

    public ResponseEntity<?> confirmEmailCode(ConfirmCodeDTO confirmCodeDTO) {
        return this.codeService.confirmCode(
            confirmCodeDTO.getEmail(), String.valueOf(confirmCodeDTO.getCode())
        );
    }
}
