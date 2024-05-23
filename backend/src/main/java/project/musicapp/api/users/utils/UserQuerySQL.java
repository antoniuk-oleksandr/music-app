package project.musicapp.api.users.utils;

public class UserQuerySQL {
    public static final String FIND_ALL_USERS_BY_USERNAME_AND_BY_IS_ARTIST =
            "SELECT * FROM users " +
            "WHERE LOWER(username) LIKE LOWER(CONCAT('%', :value, '%')) " +
            "AND is_artist = :isArtist " +
            "LIMIT :limit OFFSET :offset";
}
