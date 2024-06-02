package project.musicapp.utils.email.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import project.musicapp.utils.email.dto.CodeDTO;

import java.sql.Timestamp;
import java.time.Duration;
import java.util.Random;

@Service
public class CodeService {
    @Value("${code.digits}")
    private byte maxDigits;

    @Value("${code.expiration}")
    private Duration codeExpiration;

    public CodeDTO generateCode() {
        int code = generateRandomCode();
        Timestamp expirationTimestamp = new Timestamp(
            System.currentTimeMillis() + codeExpiration.toMillis()
        );
        return new CodeDTO(String.valueOf(code), expirationTimestamp);
    }

    public int generateRandomCode() {
        int maxValue = (int) Math.pow(10, maxDigits) - 1;
        return new Random().nextInt(maxValue + 1);
    }
}
