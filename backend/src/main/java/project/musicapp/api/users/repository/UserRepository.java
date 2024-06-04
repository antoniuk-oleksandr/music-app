package project.musicapp.api.users.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.musicapp.api.users.model.User;
import project.musicapp.api.users.utils.UserQuerySQL;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query(value = UserQuerySQL.FIND_ALL_USERS_BY_USERNAME_AND_BY_IS_ARTIST, nativeQuery = true)
    List<User> findAllUsersByUsernameAndByIsArtist(@Param("value") String value,
                                                   @Param("limit") int limit,
                                                   @Param("offset") int offset,
                                                   @Param("isArtist") boolean isArtist);

    @Query(value = UserQuerySQL.FIND_ALL_USERS_FOR_SONG_BY_SONG_ID, nativeQuery = true)
    List<User> findAllUsersBySongId(@Param("id") int id);

    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    @Modifying
    @Query(value = UserQuerySQL.UPDATE_USER_BANNER_BY_USER_ID, nativeQuery = true)
    void updateUserBannerByUserId(@Param("id") int id,
                                  @Param("path") String path);

    @Modifying
    @Query(value = UserQuerySQL.UPDATE_USER_AVATAR_BY_USER_ID, nativeQuery = true)
    void updateUserAvatarByUserId(@Param("id") int id,
                                  @Param("path") String path);
}
