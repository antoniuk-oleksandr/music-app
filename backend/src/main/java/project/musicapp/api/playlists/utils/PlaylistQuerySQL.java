package project.musicapp.api.playlists.utils;

public class PlaylistQuerySQL {
    public static final String FIND_ALL_PLAYLISTS_BY_NAME =
            "SELECT p.playlist_id, p.is_public, p.creating_date, p.name, p.image_path, u.user_id, u.username " +
            "FROM playlists AS p " +
            "JOIN users AS u ON p.user_id = u.user_id " +
            "WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :value, '%')) " +
            "LIMIT :limit OFFSET :offset";

    public static final String FIND_ALL_SONGS_BY_PLAYLIST_ID =
            "SELECT s.song_id, s.name, s.duration, s.release_date, s.song_path, s.image_path, " +
            "u.user_id, u.username, u.avatar_path, u.banner_path " +
            "FROM songs_playlists AS sp " +
            "INNER JOIN user_songs AS us on sp.user_song_id = us.user_songs_id " +
            "INNER JOIN songs AS s on us.song_id = s.song_id " +
            "INNER JOIN users AS u on us.user_id = u.user_id " +
            "WHERE sp.playlist_id = :id";
}
