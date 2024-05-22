package project.musicapp.api.songs.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.musicapp.api.songs.model.SongUser;
import project.musicapp.api.songs.utils.SongsQuerySQL;

import java.util.List;

@Repository
public interface SongUserRepository extends CrudRepository<SongUser, Long> {
    @Query(value = SongsQuerySQL.FIND_ALL_SONG_USERS_BY_SONG_NAME, nativeQuery = true)
    List<Object[]> findAllSongUsersBySongName(@Param("value") String value,
                                              @Param("limit") int limit,
                                              @Param("offset") int offset);
}

