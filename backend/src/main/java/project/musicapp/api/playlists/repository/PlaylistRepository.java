package project.musicapp.api.playlists.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.musicapp.api.albums.utils.AlbumQuerySQL;
import project.musicapp.api.playlists.model.Playlist;
import project.musicapp.api.playlists.utils.PlaylistQuerySQL;

import java.util.List;

@Repository
public interface PlaylistRepository extends CrudRepository<Playlist, Integer> {
    @Query(value = PlaylistQuerySQL.FIND_ALL_PLAYLISTS_BY_NAME, nativeQuery = true)
    List<Object[]> findAllPlaylistsByName(@Param("value") String value,
                                          @Param("limit") int limit,
                                          @Param("offset") int offset
    );

    @Query(value = PlaylistQuerySQL.FIND_ALL_SONGS_BY_PLAYLIST_ID, nativeQuery = true)
    List<Integer> findAllSongsByPlaylistId(@Param("id") int id);

    @Query(value = PlaylistQuerySQL.FIND_ALL_PLAYLISTS_ID_BY_USER_ID, nativeQuery = true)
    List<Integer> findAllPlaylistIdsByUserId(@Param("userId") int userId,
                                             @Param("limit") int limit,
                                             @Param("offset") int offset
    );
}