package project.musicapp.api.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.musicapp.api.users.dto.UserDTO;
import project.musicapp.api.users.dto.UserProfileDTO;
import project.musicapp.api.users.models.User;
import project.musicapp.api.users.services.UserProfileService;
import project.musicapp.api.users.services.UserService;

@RestController
@RequestMapping("users")
public class UserController {
    private final UserService userService;
    private final UserProfileService userProfileService;

    @Autowired
    public UserController(
            UserService userService,
            UserProfileService userProfileService
    ) {
        this.userService = userService;
        this.userProfileService = userProfileService;
    }

    @GetMapping(value = "/{userId}")
    public ResponseEntity<UserDTO> getUser(@PathVariable int userId) {
        return this.userService.getUserById(userId);
    }

    @GetMapping("/profile/{userId}")
    public UserProfileDTO getProfile(@PathVariable Integer userId) {
        return this.userProfileService.getUserProfile(userId);
    }
}
