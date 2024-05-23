package project.musicapp.api.albums.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import project.musicapp.api.albums.model.Album;
import project.musicapp.api.albums.utils.AlbumQuerySQL;

import java.util.List;

public interface AlbumRepository extends CrudRepository<Album, Integer> {
    @Query(value = AlbumQuerySQL.FIND_ALL_ALBUMS_BY_NAME, nativeQuery = true)
    List<Object[]> findAllAlbumsByName(@Param("value") String value,
                                       @Param("limit") int limit,
                                       @Param("offset") int offset);
}
