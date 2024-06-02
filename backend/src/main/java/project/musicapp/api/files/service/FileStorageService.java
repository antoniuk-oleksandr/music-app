package project.musicapp.api.files.service;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
@RequiredArgsConstructor
public class FileStorageService {
    private final GetFileService downloadFileService;
    private final UploadFileService uploadFileService;

    public ResponseEntity<byte[]> getFile(String folder, String fileName) {
        return this.downloadFileService.getFile(folder, fileName);
    }

    public ResponseEntity<?> uploadFile(String folder, MultipartFile file) {
        return this.uploadFileService.uploadFile(folder, file);
    }
}
