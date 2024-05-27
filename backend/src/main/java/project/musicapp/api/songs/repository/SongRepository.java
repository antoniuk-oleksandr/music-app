package project.musicapp.api.songs.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.musicapp.api.songs.model.Song;

@Repository
public interface SongRepository extends CrudRepository<Song, Integer> { }
