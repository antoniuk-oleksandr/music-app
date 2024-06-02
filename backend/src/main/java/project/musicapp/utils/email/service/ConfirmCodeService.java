package project.musicapp.utils.email.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import project.musicapp.utils.email.dto.CodeDTO;
import project.musicapp.utils.email.dto.ConfirmCodeDTO;

import java.sql.Timestamp;

@Service
@RequiredArgsConstructor
public class ConfirmCodeService {
    private final CodeStorageService codeStorageService;

    public ResponseEntity<?> confirmCode(ConfirmCodeDTO confirmCodeDTO) {
        String email = confirmCodeDTO.getEmail();
        String code = String.valueOf(confirmCodeDTO.getCode());
        CodeDTO storedCode = this.codeStorageService.getCode(email);

        if (storedCode == null || !storedCode.getCode().equals(code)) {
            return ResponseEntity.badRequest().body("Expired code");
        } else if (storedCode.getExpires().before(new Timestamp(System.currentTimeMillis()))) {
            this.codeStorageService.removeCode(email); // Remove expired code
            return ResponseEntity.badRequest().body("Expired code");
        }

        this.codeStorageService.removeCode(email); // Remove code after successful confirmation
        return ResponseEntity.ok().body("Successful confirmation");
    }
}
