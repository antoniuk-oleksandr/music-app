package project.musicapp.api.files.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.musicapp.api.files.service.FileService;

import java.io.IOException;

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
}
