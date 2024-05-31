package project.musicapp.auth.impl;

import org.springframework.beans.factory.annotation.Autowired;
import project.musicapp.api.users.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import project.musicapp.api.users.service.UserService;
import project.musicapp.auth.mapper.UserDetailsMapper;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserService userService;

    @Autowired
    public UserDetailsServiceImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.userService.findUserByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException(username)
        );
        return new UserDetailsMapper(user).mapToUserDetails();
    }
}
