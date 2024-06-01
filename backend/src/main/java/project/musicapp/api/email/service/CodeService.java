package project.musicapp.api.email.service;

import lombok.Getter;
import lombok.Setter;
import org.aspectj.apache.bcel.classfile.Code;
import org.springframework.stereotype.Service;
import project.musicapp.api.email.dto.CodeDTO;

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

    public CodeDTO generateCode(String email) {
        int code = generateRandomCode();
        Timestamp expirationTimestamp = new Timestamp(System.currentTimeMillis() + CODE_EXPIRATION.toMillis());
        return new CodeDTO(String.valueOf(code), expirationTimestamp);
    }

    public CodeDTO getCode(String email) {
        return this.codeStorage.get(email);
    }

    public CodeDTO putCode(String email, CodeDTO codeDTO) {
        return this.codeStorage.put(email, codeDTO);
    }

    public CodeDTO removeCode(String email) {
        return this.codeStorage.remove(email);
    }

    public int generateRandomCode() {
        int maxValue = (int) Math.pow(10, CodeService.MAX_DIGITS) - 1;
        return new Random().nextInt(maxValue + 1);
    }
}
