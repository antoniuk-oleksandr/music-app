package project.musicapp.api.songs.utils;

public class SongsQuerySQL {
    public static final String FIND_ALL_SONG_INDICES_USERS_BY_SONG_NAME =
            "SELECT DISTINCT song_id FROM ( " +
                "SELECT s.song_id, s.release_date " +
                "FROM user_songs us " +
                "JOIN songs s ON us.song_id = s.song_id " +
                "WHERE LOWER(s.name) LIKE LOWER(CONCAT('%', :value, '%')) " +
                "ORDER BY s.release_date DESC " +
                "LIMIT :limit OFFSET :offset " +
            ") subquery";

    public static final String FIND_USER_SONGS_BY_USER_ID =
            "SELECT us.song_id " +
            "FROM user_songs us " +
            "JOIN songs s ON us.song_id = s.song_id " +
            "WHERE us.user_id = :userId " +
            "ORDER BY s.release_date DESC " +
            "LIMIT :limit OFFSET :offset";
}