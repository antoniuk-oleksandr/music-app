package project.musicapp.api.email.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.email.dto.ConfirmCodeDTO;
import project.musicapp.api.email.dto.SendCodeDTO;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final ConfirmCodeService codeService;
    private final SendCodeService sendCodeService;

    public ResponseEntity<?> sendEmailWithGeneratedCode(SendCodeDTO messageDTO) {
        return this.sendCodeService.sendEmailWithGeneratedCode(messageDTO);
    }

    public ResponseEntity<?> confirmEmailCode(ConfirmCodeDTO confirmCodeDTO) {
        return this.codeService.confirmCode(confirmCodeDTO);
    }
}
