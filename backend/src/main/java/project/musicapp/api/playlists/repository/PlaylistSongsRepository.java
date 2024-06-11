package project.musicapp.api.playlists.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;
import project.musicapp.api.playlists.model.PlaylistSongs;
import project.musicapp.api.playlists.utils.PlaylistQuerySQL;

import java.util.Optional;

@Repository
@Transactional
public interface PlaylistSongsRepository extends CrudRepository<PlaylistSongs, Integer> {
    @Query(value = PlaylistQuerySQL.FIND_SONG_BY_PLAYLIST_ID_AND_USER_SONG_ID, nativeQuery = true)
    Optional<Object> findPlaylistSongsByPlaylistIdAndUserSongId(@Param("playlistId") int playlistId,
                                                                @Param("userSongId") int userSongId
    );

    @Modifying
    @Query(value = PlaylistQuerySQL.SAVE_SONG_TO_PLAYLIST, nativeQuery = true)
    void saveSongToPlaylist(@Param("playlistId") int playlistId,
                            @Param("userSongId") int userSongId
    );

    @Modifying
    @Query(value = PlaylistQuerySQL.DELETE_SONG_FROM_PLAYLIST, nativeQuery = true)
    void deleteSongFromPlaylist(@Param("playlistId") int playlistId,
                                @Param("userSongId") int userSongId);
}
