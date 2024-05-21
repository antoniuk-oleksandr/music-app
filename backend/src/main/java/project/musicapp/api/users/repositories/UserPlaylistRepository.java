package project.musicapp.api.users.repositories;

import org.springframework.data.repository.CrudRepository;
import project.musicapp.api.users.models.UserPlaylist;

public interface UserPlaylistRepository extends CrudRepository<UserPlaylist, Integer> { }
