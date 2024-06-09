import {fileRequest} from "@/api/file-request";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {Song} from "@/types/Song";
import {FileType} from "@/types/File";
import {Device} from "@/types/Device";
import Cookies from "js-cookie";

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

export const getUrlFromString = async (url: string, type: FileType) => {
    const response = await fileRequest(url);
    const imageBlob = new Blob([response as BlobPart], {type});
    return URL.createObjectURL(imageBlob);
}

export const getYearFromTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);

    return date.getFullYear();
}

export const getSongImagesForList = async (list: Album | Playlist) => {
    list.imagePath = await getUrlFromString(list.imagePath, FileType.Image)
    for (let song of list.songs) {
        song.imagePath = await getUrlFromString(song.imagePath, FileType.Image);
    }

    return list;
}

export const getImagesForList = async (list: Album[] | Playlist[]) => {
    for (let element of list) {
        element.imagePath = await getUrlFromString(element.imagePath, FileType.Image);
    }

    return list;
}

export const getImagesForSongs = async (element: { songs: Song[] }) => {
    for (let song of element.songs) {
        song.imagePath = await getUrlFromString(song.imagePath, FileType.Image);
    }
}

export const getSongSrcs = async (songs: Song[]) => {
    if (songs[0].songPath.includes('blob')) return;

    for (let song of songs) {
        song.songPath = await getUrlFromString(song.songPath, FileType.Audio);
    }
}

export const getWrapperWidth = (device: Device | null, isNavbarHidden: boolean | null) => {
    if (device === Device.Mobile) return '100%';
    const navbarWidth = isNavbarHidden ? '0px' : '270px';

    return `min(calc(100vw - 200px - ${navbarWidth} - 6px), 1478px)`;
}

export const setTokensToCookies = (jwt: any, refresh: string) => {
    Cookies.set('jwt', jwt.token);
    Cookies.set('jwtExpiration', jwt.expiration);
    Cookies.set('refreshToken', refresh);
}

export const setJwtToCookies = (jwt: any) => {
    Cookies.set('jwt', jwt.token);
    Cookies.set('jwtExpiration', jwt.expiration);
}

export const clearJwtCookies = () => {
    Cookies.remove('jwt');
    Cookies.remove('jwtExpiration');
    Cookies.remove('refreshToken');
}