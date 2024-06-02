package project.musicapp.api.files.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.musicapp.api.files.service.FileService;

@RestController
@RequestMapping("/files")
public class FileController {
    private final FileService fileService;

    @Autowired
    public FileController(FileService fileService){
        this.fileService = fileService;
    }

    @GetMapping("/{folder}/{fileName}")
    public ResponseEntity<byte[]> getSong(@PathVariable String folder,
                                          @PathVariable String fileName)  {
        return this.fileService.getFile(folder, fileName);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("folder") String folder,
                                        @RequestParam("file") MultipartFile file) {
        return this.fileService.uploadFile(folder, file);
    }
}
