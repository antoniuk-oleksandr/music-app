package project.musicapp.api.files.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
@RequiredArgsConstructor
public class FileStorageService {
    private final LoadFileService loadFileService;
    private final UploadFileService uploadFileService;

    public ResponseEntity<byte[]> load(String folder, String fileName) {
        return this.loadFileService.load(folder, fileName);
    }

    public ResponseEntity<?> upload(String folder, MultipartFile file) {
        return this.uploadFileService.upload(folder, file);
    }
}
