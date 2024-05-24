package project.musicapp.api.albums.utils;

public class AlbumQuerySQL {
    public static final String FIND_ALL_ALBUMS_BY_NAME =
            "SELECT a.album_id, a.name, a.date, a.image_path, u.user_id, u.username " +
            "FROM albums AS a " +
            "JOIN users AS u ON a.creator_id = u.user_id " +
            "WHERE LOWER(a.name) LIKE LOWER(CONCAT('%', :value, '%')) " +
            "LIMIT :limit OFFSET :offset";

    public static final String FIND_SONGS_IN_ALBUM_BY_PLAYLIST_ID =
            "SELECT s.song_id, s.name, s.duration, s.release_date, s.song_path, s.image_path, " +
            "u.user_id, u.username, u.avatar_path, u.banner_path " +
            "FROM songs_albums AS sa " +
            "INNER JOIN user_songs AS us on sa.user_song_id = us.user_songs_id " +
            "INNER JOIN songs AS s on us.song_id = s.song_id " +
            "INNER JOIN users AS u on us.user_id = u.user_id " +
            "WHERE sa.album_id = :id";
}
