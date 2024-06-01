package project.musicapp.api.tokens.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import project.musicapp.api.tokens.model.RefreshToken;
import project.musicapp.api.users.model.User;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {
    Optional<RefreshToken> findRefreshTokenByUser(User user);
}
