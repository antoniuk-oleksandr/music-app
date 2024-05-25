export const getAlbumData = () => {
    return {
        "name": "Album 1",
        "imagePath": "albums/1.jpg",
        "creatingDate": 1716454800000,
        "creator": {
            "id": 1,
            "username": "john_doe"
        },
        "songs": [
            {
                "id": 1,
                "name": "Song One",
                "duration": 183,
                "releaseDate": 1642233600000,
                "songPath": "songs/1.mp3",
                "imagePath": "song-images/1.jpg",
                "users": [
                    {
                        "id": 1,
                        "username": "john_doe",
                        "avatarPath": "avatars/1.jpg"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Song Two",
                "duration": 183,
                "releaseDate": 1645351200000,
                "songPath": "songs/1.mp3",
                "imagePath": "song-images/1.jpg",
                "users": [
                    {
                        "id": 1,
                        "username": "john_doe",
                        "avatarPath": "avatars/1.jpg"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Song Three",
                "duration": 183,
                "releaseDate": 1648209600000,
                "songPath": "songs/1.mp3",
                "imagePath": "song-images/1.jpg",
                "users": [
                    {
                        "id": 1,
                        "username": "john_doe",
                        "avatarPath": "avatars/1.jpg"
                    }
                ]
            }
        ]
    }
}