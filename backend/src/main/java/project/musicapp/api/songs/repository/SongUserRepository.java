package project.musicapp.api.songs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.musicapp.api.songs.model.SongUser;
import project.musicapp.api.songs.utils.SongsQuerySQL;

import java.util.List;

@Repository
public interface SongUserRepository extends JpaRepository<SongUser, Integer> {
    @Query(value = SongsQuerySQL.FIND_ALL_SONG_INDICES_USERS_BY_SONG_NAME, nativeQuery = true)
    List<Integer> findAllSongsUsersIndicesBySongName(@Param("value") String value,
                                                     @Param("limit") int limit,
                                                     @Param("offset") int offset
    );

    @Query(value = SongsQuerySQL.FIND_USER_SONGS_BY_USER_ID, nativeQuery = true)
    List<Integer> findAllUserSongsIndicesByUserId(@Param("userId") int userId,
                                                  @Param("limit") int limit,
                                                  @Param("offset") int offset
    );
}