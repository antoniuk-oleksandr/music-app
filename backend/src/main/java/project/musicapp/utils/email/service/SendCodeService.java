package project.musicapp.utils.email.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import project.musicapp.utils.email.dto.CodeDTO;
import project.musicapp.auth.dto.RegistrationRequestDTO;
import project.musicapp.utils.email.dto.SendCodeDTO;

@Service
@RequiredArgsConstructor
public class SendCodeService {
    private final CodeService codeService;
    private final JavaMailSender mailSender;
    private final CodeStorageService codeStorageService;

    public ResponseEntity<?> sendEmailWithGeneratedCode(SendCodeDTO messageDTO) {
        CodeDTO code = this.codeService.generateCode();

        this.codeStorageService.putCode(messageDTO.getTo(), code);

        try {
            MimeMessage message = getMessage(messageDTO, code);
            this.mailSender.send(message);
        } catch (MessagingException e) {
            return ResponseEntity.badRequest().body("Failed to send email");
        }

        return ResponseEntity.ok("Email sent successfully with code");
    }

    private MimeMessage getMessage(SendCodeDTO email, CodeDTO code) throws MessagingException {
        MimeMessage message = this.mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        String html = email.getHtml().replace("%s", code.getCode());

        helper.setTo(email.getTo());
        helper.setSubject(email.getSubject());
        helper.setText(html, true);

        return message;
    }
}
