package project.musicapp.api.albums.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.musicapp.api.albums.model.Album;
import project.musicapp.api.albums.utils.AlbumQuerySQL;

import java.util.List;

@Repository
public interface AlbumRepository extends CrudRepository<Album, Integer> {
    @Query(value = AlbumQuerySQL.FIND_ALL_ALBUMS_BY_NAME, nativeQuery = true)
    List<Object[]> findAllAlbumsByName(@Param("value") String value,
                                       @Param("limit") int limit,
                                       @Param("offset") int offset);

    @Query(value = AlbumQuerySQL.FIND_SONGS_ID_BY_ALBUM_ID, nativeQuery = true)
    List<Integer> findAllSongsByAlbumId(@Param("id") int id);

    @Query(value = AlbumQuerySQL.FIND_ALL_ALBUMS_ID_BY_USER_ID, nativeQuery = true)
    List<Integer> findAllAlbumsByUserId(@Param("userId") int userId,
                                        @Param("limit") int limit,
                                        @Param("offset") int offset);

    @Query(value = AlbumQuerySQL.FIND_ALBUM_ID_BY_SONG_ID, nativeQuery = true)
    List<Object[]> findAlbumBySongId(@Param("id") int id);
}
