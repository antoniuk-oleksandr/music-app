package project.musicapp.api.subscribe.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import project.musicapp.api.subscribe.model.Subscribe;

import java.util.Optional;

@Repository
public interface SubscribeRepository extends CrudRepository<Subscribe, Integer> {
    Optional<Subscribe> findByFollowerIdAndFollowedId(Integer followerId, Integer followedId);
}
