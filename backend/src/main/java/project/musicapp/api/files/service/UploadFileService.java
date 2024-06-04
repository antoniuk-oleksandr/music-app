package project.musicapp.api.files.service;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

@Service
public class UploadFileService {
    @Value("${file.root.folder}")
    private String rootFolder;

    @SneakyThrows
    public ResponseEntity<?> upload(String folder, MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Failed to store empty file.");
        }

        Path folderPath = Paths.get("").toAbsolutePath().resolve(this.rootFolder + "/" + folder);
        if (!Files.exists(folderPath)) {
            Files.createDirectories(folderPath);
        }

        String fileName = file.getOriginalFilename();
        Path filePath = folderPath.resolve(Objects.requireNonNull(fileName)).normalize();
        Files.write(filePath, file.getBytes());
        return ResponseEntity.ok().body("File uploaded successfully.");
    }
}
