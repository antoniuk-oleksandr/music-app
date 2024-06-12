package project.musicapp.api.songs.utils;

public class SongsQuerySQL {
    public static final String FIND_ALL_SONG_INDICES_USERS_BY_SONG_NAME =
            "SELECT DISTINCT s.song_id, s.release_date " +
                    "FROM user_songs us " +
                    "JOIN songs s ON us.song_id = s.song_id " +
                    "WHERE LOWER(s.name) LIKE LOWER(CONCAT('%', ?1, '%')) " +
                    "ORDER BY s.release_date DESC " +
                    "LIMIT ?2 OFFSET ?3";

    public static final String FIND_USER_SONGS_BY_USER_ID =
            "SELECT us.song_id " +
                    "FROM user_songs us " +
                    "JOIN songs s ON us.song_id = s.song_id " +
                    "WHERE us.user_id = :userId " +
                    "ORDER BY s.release_date DESC " +
                    "LIMIT :limit OFFSET :offset";

    public static final String FIND_SONG_USER_ID_BY_SONG_ID =
            "SELECT user_songs_id FROM user_songs " +
                    "WHERE song_id = :songId " +
                    "LIMIT 1";
}