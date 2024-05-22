package project.musicapp.api.songs.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.musicapp.api.songs.model.SongUser;

import java.util.List;

@Repository
public interface SongUserRepository extends CrudRepository<SongUser, Long> {
    @Query(value =
            "SELECT s.song_id, s.name, s.duration, s.release_date, s.file_url, " +
                   "u.user_id, u.username, u.avatar_url, u.banner_url " +
            "FROM user_songs us " +
            "JOIN songs s ON us.song_id = s.song_id " +
            "JOIN users AS u ON us.user_id = u.user_id " +
            "WHERE s.name LIKE CONCAT('%', :value, '%') " +
            "LIMIT :limit OFFSET :offset", nativeQuery = true)
    List<Object[]> findAllSongUsersBySongName(@Param("value") String value, @Param("limit") int limit, @Param("offset") int offset);
}

