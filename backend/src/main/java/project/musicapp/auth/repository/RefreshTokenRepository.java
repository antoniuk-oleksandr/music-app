package project.musicapp.auth.repository;

import project.musicapp.api.users.model.User;
import project.musicapp.auth.model.RefreshToken;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {
    Optional<RefreshToken> findRefreshTokenByUser(User user);
}
