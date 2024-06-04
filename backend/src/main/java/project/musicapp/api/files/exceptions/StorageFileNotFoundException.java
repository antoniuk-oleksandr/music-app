package project.musicapp.api.files.exceptions;

import java.io.IOException;

public class StorageFileNotFoundException extends IOException {
    public StorageFileNotFoundException(String message) {
        super(message);
    }

    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
