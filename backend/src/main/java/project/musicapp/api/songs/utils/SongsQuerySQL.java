package project.musicapp.api.songs.utils;

public class SongsQuerySQL {
    public static final String FIND_ALL_SONG_USERS_BY_SONG_NAME =
            "SELECT s.song_id, s.name, s.duration, s.release_date, s.song_path, s.image_path, " +
            "u.user_id, u.username, u.avatar_path, u.banner_path " +
            "FROM user_songs us " +
            "JOIN songs s ON us.song_id = s.song_id " +
            "JOIN users AS u ON us.user_id = u.user_id " +
            "WHERE LOWER(s.name) LIKE LOWER(CONCAT('%', :value, '%')) " +
            "LIMIT :limit OFFSET :offset";
}
