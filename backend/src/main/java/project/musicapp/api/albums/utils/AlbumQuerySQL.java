package project.musicapp.api.albums.utils;

public class AlbumQuerySQL {
    public static final String FIND_ALL_ALBUMS_BY_NAME =
            "SELECT DISTINCT a.album_id, a.name, a.date, a.image_path, " +
                    "u.user_id, u.username " +
            "FROM albums AS a " +
                "JOIN users AS u ON a.creator_id = u.user_id " +
                "WHERE LOWER(a.name) LIKE LOWER(CONCAT('%', :value, '%')) " +
                "ORDER BY a.date DESC " +
                "LIMIT :limit OFFSET :offset";

    public static final String FIND_SONGS_ID_BY_ALBUM_ID =
            "SELECT DISTINCT song_id FROM ( " +
                "SELECT s.song_id FROM songs_albums AS sa " +
                    "INNER JOIN user_songs AS us on sa.user_song_id = us.user_songs_id " +
                    "INNER JOIN songs AS s on us.song_id = s.song_id " +
                    "WHERE sa.album_id = :id " +
                    "ORDER BY s.release_date DESC" +
                ") subquery";

    public static final String FIND_ALL_ALBUMS_ID_BY_USER_ID =
            "SELECT albums.album_id " +
            "FROM albums " +
                "WHERE albums.creator_id = :userId " +
                "ORDER BY albums.date DESC " +
                "LIMIT :limit OFFSET :offset";

    public static final String FIND_ALBUM_ID_BY_SONG_ID =
            "SELECT DISTINCT a.album_id, a.name " +
            "FROM songs_albums sa " +
            "INNER JOIN albums a on a.album_id = sa.album_id " +
            "INNER JOIN user_songs us ON sa.user_song_id = us.user_songs_id " +
            "INNER JOIN songs s ON us.song_id = s.song_id " +
            "WHERE s.song_id = :id";
}
