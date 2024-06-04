package project.musicapp.api.files.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.musicapp.api.files.service.FileStorageService;

@RestController
@RequestMapping("/files")
public class FileController {
    private final FileStorageService fileService;

    @Autowired
    public FileController(FileStorageService fileService){
        this.fileService = fileService;
    }

    @GetMapping("/load")
    public ResponseEntity<byte[]> load(@RequestParam("folder") String folder,
                                       @RequestParam("file") String fileName) {
        return this.fileService.load(folder, fileName);
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> upload(@RequestParam("folder") String folder,
                                    @RequestParam("file") MultipartFile file) {
        return this.fileService.upload(folder, file);
    }
}
