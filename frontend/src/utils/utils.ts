import {fileRequest} from "@/api/file-request";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";

export const getUserListSeparator = (special: boolean | undefined, index: number, length: number) => {
    if (special) {
        if (index === length - 1) return ' & ';
        else return ', ';
    }

    return '•';
}

export const capitalize = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const getUrlFromString = async (url: string, type: string) => {
    const response = await fileRequest(url);
    const imageBlob = new Blob([response as BlobPart], {type});
    return URL.createObjectURL(imageBlob);
}

export const getYearFromTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);

    return date.getFullYear();
}

export const getImagesForList = async (list: Album | Playlist) => {
    list.imagePath = await getUrlFromString(list.imagePath, 'image/jpeg')
    for (let song of list.songs) {
        song.imagePath = await getUrlFromString(song.imagePath, 'image/jpeg')
    }

    return list;
}