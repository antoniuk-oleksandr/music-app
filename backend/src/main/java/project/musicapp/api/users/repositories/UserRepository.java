package project.musicapp.api.users.repositories;

import org.springframework.data.repository.CrudRepository;
import project.musicapp.api.users.models.User;

public interface UserRepository extends CrudRepository<User, Integer> { }
