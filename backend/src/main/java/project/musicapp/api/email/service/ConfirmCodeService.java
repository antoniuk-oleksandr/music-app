package project.musicapp.api.email.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.api.email.dto.CodeDTO;

import java.sql.Timestamp;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class ConfirmCodeService {
    private final CodeService codeService;

    public ResponseEntity<?> confirmCode(String email, String code) {
        CodeDTO storedCode = this.codeService.getCode(email);

        if (storedCode == null) {
            return ResponseEntity.badRequest().body("Invalid code");
        }
        if (!storedCode.getCode().equals(code)) {
            return ResponseEntity.badRequest().body("Invalid code");
        }
        if (storedCode.getExpires().before(new Timestamp(System.currentTimeMillis()))) {
            this.codeService.removeCode(email); // Remove expired code
            return ResponseEntity.badRequest().body("Expired code");
        }

        this.codeService.removeCode(email); // Remove code after successful confirmation
        return ResponseEntity.ok().body("Successful confirmation");
    }
}
