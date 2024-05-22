package project.musicapp.api.users.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.musicapp.api.users.model.User;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query(value =
            "SELECT * FROM users " +
            "WHERE username LIKE CONCAT('%', :value, '%') " +
            "LIMIT :limit OFFSET :offset",
            nativeQuery = true)
    List<User> findAllUsers(@Param("value") String value, @Param("limit") int limit, @Param("offset") int offset);
}
