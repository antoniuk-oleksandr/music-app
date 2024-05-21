package project.musicapp.api.music;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/music")
public class MusicController {
    @GetMapping("/recommended")
    public ResponseEntity<String> recommended() {
        return new ResponseEntity<>("idk", HttpStatus.NOT_FOUND);
    }
}
