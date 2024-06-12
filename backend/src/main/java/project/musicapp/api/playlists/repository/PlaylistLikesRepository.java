package project.musicapp.api.playlists.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import project.musicapp.api.playlists.model.PlaylistLikes;

import java.util.List;

@Repository
public interface PlaylistLikesRepository extends CrudRepository<PlaylistLikes, Integer> {
    List<PlaylistLikes> getPlaylistLikesByUserId(int userId);
}
