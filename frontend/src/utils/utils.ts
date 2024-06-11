import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {Song} from "@/types/Song";
import {FileType} from "@/types/File";
import {Device} from "@/types/Device";
import Cookies from "js-cookie";
import {getIpAddress} from "@/api/ip-address";
import {Jwt} from "@/types/TokenInfo";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setDialog, setIsDialogShown} from "@/redux/reducers/dialog-slice";

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

export const formatImageUrl = (url: string) => {
    const ip = getIpAddress();
    return `http://${ip}:8030/files/${url}`;
}

export const getYearFromTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);

    return date.getFullYear();
}

export const getSongImagesForList = async (list: Album | Playlist) => {
    list.imagePath = formatImageUrl(list.imagePath)
    for (let song of list.songs) {
        song.imagePath = formatImageUrl(song.imagePath);
    }

    return list;
}

export const getImagesForList = (list: Album[] | Playlist[]) => {
    for (let element of list) {
        element.imagePath = formatImageUrl(element.imagePath);
    }

    return list;
}

export const getImagesForSongs = (element: { songs: Song[] }) => {
    for (let song of element.songs) {
        song.imagePath = formatImageUrl(song.imagePath);
    }
}

export const getSongSrcs = (songs: Song[]) => {
    for (let song of songs) {
        song.songPath = formatImageUrl(song.songPath);
    }
}

export const getWrapperWidth = (device: Device | null, isNavbarHidden: boolean | null) => {
    if (device === Device.Mobile) return '100%';
    const navbarWidth = isNavbarHidden ? '0px' : '270px';

    return `min(calc(100vw - 200px - ${navbarWidth} - 6px), 1478px)`;
}

export const setTokensToCookies = (jwt: any, refresh: string) => {
    Cookies.set('jwt', jwt.token, {expires: 30});
    Cookies.set('jwtExpiration', jwt.expiration, {expires: 30});
    Cookies.set('refreshToken', refresh, {expires: 30});
}

export const setJwtToCookies = (jwt: Jwt) => {
    Cookies.set('jwt', jwt.token, {expires: 30});
    Cookies.set('jwtExpiration', JSON.stringify(jwt.expiration), {expires: 30});
}

export const clearJwtCookies = () => {
    Cookies.remove('jwt');
    Cookies.remove('jwtExpiration');
    Cookies.remove('refreshToken');
}

export const showDialog = (
    dispatch: Dispatch<UnknownAction>,
    text: string,
    color: string,
) => {
    dispatch(setDialog([true, text, color]));
    setTimeout(() => dispatch(setIsDialogShown(false)), 3500);
}

export const convertToFormData = (file: File, name: string) => {
    const formData = new FormData();
    formData.append(name, file);
    return formData;
}