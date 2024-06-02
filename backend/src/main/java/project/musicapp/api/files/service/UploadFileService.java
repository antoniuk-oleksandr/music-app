package project.musicapp.api.files.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Paths;

@Service
public class UploadFileService {
    private String getStringPath(String folder) {
        return String.format("/static/%s", folder);
    }

    public ResponseEntity<?> uploadFile(String folder, MultipartFile file) {

        return null;
    }
}
