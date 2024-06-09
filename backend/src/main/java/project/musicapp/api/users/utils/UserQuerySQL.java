package project.musicapp.api.users.utils;

public class UserQuerySQL {
    public static final String FIND_ALL_USERS_BY_USERNAME_AND_BY_IS_ARTIST =
            "SELECT * FROM users " +
            "WHERE LOWER(username) LIKE LOWER(CONCAT('%', :value, '%')) " +
            "AND is_artist = :isArtist " +
            "LIMIT :limit OFFSET :offset";

    public static final String FIND_ALL_USERS_FOR_SONG_BY_SONG_ID =
            "SELECT u.* " +
            "FROM user_songs AS us " +
            "INNER JOIN public.songs s on s.song_id = us.song_id " +
            "INNER JOIN public.users u on u.user_id = us.user_id " +
            "WHERE us.song_id = :id";

    public static final String UPDATE_USER_BANNER_BY_USER_ID =
            "UPDATE users " +
            "SET banner_path = :banner " +
            "WHERE user_id = :id";

    public static final String UPDATE_USER_AVATAR_BY_USER_ID =
            "UPDATE users " +
            "SET avatar_path = :avatar " +
            "WHERE user_id = :id";

    public static final String UPDATE_USER_IS_ARTIST_BY_USER_ID =
            "UPDATE users SET is_artist = true WHERE user_id = :id";
}
