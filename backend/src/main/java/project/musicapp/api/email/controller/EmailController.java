package project.musicapp.api.email.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.musicapp.api.email.dto.ConfirmCodeDTO;
import project.musicapp.api.email.dto.SendCodeDTO;
import project.musicapp.api.email.service.EmailService;

@RestController
@RequestMapping("/email")
@RequiredArgsConstructor
public class EmailController {
    private final EmailService emailService;

    @PostMapping("/send-code")
    public ResponseEntity<?> sendCode(@RequestBody SendCodeDTO messageDTO){
        return this.emailService.sendEmail(messageDTO);
    }

    @PostMapping("/confirm-code")
    public ResponseEntity<?> confirmEmailCode(@RequestBody ConfirmCodeDTO codeDTO){
        return this.emailService.confirmEmailCode(codeDTO);
    }
}
