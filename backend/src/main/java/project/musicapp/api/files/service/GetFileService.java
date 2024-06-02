package project.musicapp.api.files.service;

import lombok.SneakyThrows;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

import java.io.InputStream;

@Service
public class GetFileService {
    private String getStringPath(String folder, String fileName) {
        return String.format("/static/%s/%s", folder, fileName);
    }

    private ClassPathResource getResource(String folder, String fileName) {
        String path = getStringPath(folder, fileName);
        return new ClassPathResource(path);
    }

    @SneakyThrows
    private byte[] getBytesFromResource(ClassPathResource resource) {
        try (InputStream inputStream = resource.getInputStream()) {
            return FileCopyUtils.copyToByteArray(inputStream);
        }
    }

    @SneakyThrows
    public ResponseEntity<byte[]> getFile(String folder, String fileName)  {
        ClassPathResource resource = getResource(folder, fileName);

        if (!resource.exists())
            return ResponseEntity.notFound().build();

        byte[] fileBytes = getBytesFromResource(resource);
        return ResponseEntity.ok().body(fileBytes);
    }
}
