package project.musicapp.auth.mapper;

import org.springframework.security.core.userdetails.UserDetails;
import project.musicapp.api.users.model.User;

import java.util.Collections;

public class UserDetailsMapper {
    private final User user;

    public UserDetailsMapper(User user) {
        this.user = user;
    }

    public UserDetails mapToUserDetails() {
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(), user.getPassword(), Collections.emptyList()
        );
    }
}
