package project.musicapp.api.songs.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import project.musicapp.api.songs.model.Song;

@Repository
public interface SongRepository extends CrudRepository<Song, Integer> { }
