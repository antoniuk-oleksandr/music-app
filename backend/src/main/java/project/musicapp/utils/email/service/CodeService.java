package project.musicapp.utils.email.service;

import org.springframework.stereotype.Service;
import project.musicapp.utils.email.dto.CodeDTO;

import java.sql.Timestamp;
import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class CodeService {
    private static final int MAX_DIGITS = 6;
    private static final Duration CODE_EXPIRATION = Duration.ofSeconds(30);
    private final Map<String, CodeDTO> codeStorage = new HashMap<>();

    public CodeDTO generateCode() {
        int code = generateRandomCode();
        Timestamp expirationTimestamp = new Timestamp(
            System.currentTimeMillis() + CODE_EXPIRATION.toMillis()
        );
        return new CodeDTO(String.valueOf(code), expirationTimestamp);
    }

    public CodeDTO getCode(String email) {
        return this.codeStorage.get(email);
    }

    public void putCode(String email, CodeDTO codeDTO) {
        this.codeStorage.put(email, codeDTO);
    }

    public void removeCode(String email) {
        this.codeStorage.remove(email);
    }

    public int generateRandomCode() {
        int maxValue = (int) Math.pow(10, CodeService.MAX_DIGITS) - 1;
        return new Random().nextInt(maxValue + 1);
    }
}
