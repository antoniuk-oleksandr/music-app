package project.musicapp.api.users.utils;

public class UserQuerySQL {
    public static final String FIND_ALL_USERS_BY_USERNAME =
            "SELECT * FROM users " +
            "WHERE LOWER(username) LIKE LOWER(CONCAT('%', :value, '%')) " +
            "LIMIT :limit OFFSET :offset";
}
