package project.musicapp.api.email.service;

import org.springframework.stereotype.Service;
import project.musicapp.api.email.dto.CodeDTO;

import java.util.HashMap;
import java.util.Map;

@Service
public class CodeStorageService {
    private final Map<String, CodeDTO> codeStorage = new HashMap<>();

    public CodeDTO getCode(String email) {
        return this.codeStorage.get(email);
    }

    public void putCode(String email, CodeDTO codeDTO) {
        this.codeStorage.put(email, codeDTO);
    }

    public void removeCode(String email) {
        this.codeStorage.remove(email);
    }
}
