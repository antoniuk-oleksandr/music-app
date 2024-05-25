package project.musicapp.api.songs.utils;

public class SongsQuerySQL {
    public static final String FIND_ALL_SONG_INDICES_USERS_BY_SONG_NAME =
            "SELECT DISTINCT s.song_id " +
            "FROM user_songs us " +
            "JOIN songs s ON us.song_id = s.song_id " +
            "WHERE LOWER(s.name) LIKE LOWER(CONCAT('%', :value, '%')) " +
            "LIMIT :limit OFFSET :offset";
}