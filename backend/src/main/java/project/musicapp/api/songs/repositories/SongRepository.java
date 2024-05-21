package project.musicapp.api.songs.repositories;

import project.musicapp.api.songs.models.Song;
import org.springframework.data.repository.CrudRepository;

public interface SongRepository extends CrudRepository<Song, Integer> { }