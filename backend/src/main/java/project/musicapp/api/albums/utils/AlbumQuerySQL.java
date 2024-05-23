package project.musicapp.api.albums.utils;

public class AlbumQuerySQL {
    public static final String FIND_ALL_ALBUMS_BY_NAME =
            "SELECT a.album_id, a.name, a.date, a.image_path, u.user_id, u.username " +
            "FROM albums AS a " +
            "JOIN users AS u ON a.creator_id = u.user_id " +
            "WHERE LOWER(a.name) LIKE LOWER(CONCAT('%', :value, '%')) " +
            "LIMIT :limit OFFSET :offset";
}
