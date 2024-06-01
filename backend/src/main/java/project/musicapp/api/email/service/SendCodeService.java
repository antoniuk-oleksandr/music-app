package project.musicapp.api.email.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import project.musicapp.api.email.dto.CodeDTO;
import project.musicapp.api.email.dto.SendCodeDTO;

@Service
@RequiredArgsConstructor
public class SendCodeService {
    private final CodeService codeService;
    private final JavaMailSender mailSender;

    public ResponseEntity<?> sendEmail(SendCodeDTO messageDTO) {
        CodeDTO code = this.codeService.generateCode(messageDTO.getTo());
        this.codeService.putCode(messageDTO.getTo(), code);

        try {
            MimeMessage message = getMessage(messageDTO, code);
            this.mailSender.send(message);
        } catch (MessagingException e) {
            return ResponseEntity.status(500).body("Failed to send email");
        }
        return ResponseEntity.ok("Email sent successfully with code");
    }

    private MimeMessage getMessage(SendCodeDTO email, CodeDTO code) throws MessagingException {
        MimeMessage message = this.mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(email.getTo());
        helper.setSubject(email.getSubject());
        helper.setText(
            email.getHtml().replace("%s", code.getCode()), true
        );
        return message;
    }
}
