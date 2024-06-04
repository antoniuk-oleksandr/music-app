package project.musicapp.api.files.service;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import project.musicapp.api.files.exceptions.StorageFileNotFoundException;

import java.io.IOException;
import java.io.InputStream;

@Service
public class LoadFileService {
    @Value("${file.root.folder}")
    private String stringRootFolder;

    @SneakyThrows
    public ResponseEntity<byte[]> load(String folder, String fileName)  {
        ClassPathResource resource = getResource(folder, fileName);

        if (!resource.exists())
            return ResponseEntity.notFound().build();

        byte[] fileBytes = getBytesFromResource(resource);
        return ResponseEntity.ok().body(fileBytes);
    }

    private byte[] getBytesFromResource(ClassPathResource resource) throws StorageFileNotFoundException {
        try (InputStream inputStream = resource.getInputStream()) {
            return FileCopyUtils.copyToByteArray(inputStream);
        } catch (IOException e) {
            throw new StorageFileNotFoundException("File not found: " + resource.getFilename());
        }
    }

    private String getStringPath(String folder, String fileName) {
        return String.format("/%s/%s/%s", this.stringRootFolder,  folder, fileName);
    }

    private ClassPathResource getResource(String folder, String fileName) {
        String path = getStringPath(folder, fileName);
        return new ClassPathResource(path);
    }
}
