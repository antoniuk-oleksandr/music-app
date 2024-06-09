package project.musicapp.api.files.utils;

import com.mpatric.mp3agic.InvalidDataException;
import com.mpatric.mp3agic.Mp3File;
import com.mpatric.mp3agic.UnsupportedTagException;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Component
public class Mp3Utils {
    public int getDurationFromMp3(MultipartFile file) {
        try {
            Path tempFile = Files.createTempFile("temp", ".mp3");
            file.transferTo(tempFile.toFile());

            Mp3File mp3File = new Mp3File(tempFile);

            Files.delete(tempFile);

            return (int) mp3File.getLengthInSeconds();
        } catch (IOException | UnsupportedTagException | InvalidDataException e) {
            return 0;
        }
    }
}