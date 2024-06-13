import {ListType} from "@/types/ListType";
import axios from "axios";
import {getIpAddress} from "@/api/ip-address";
import {Playlist} from "@/types/Playlist";
import {Album} from "@/types/Album";
import {formatListSongsDates} from "@/utils/utils";

export const listRequest = async (id: number, listType: ListType) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/${listType.toLowerCase()}s/${id}`;

    try {
        const response = await axios(url, {});

        const data: Playlist | Album = response.data;
        data.creatingDate = data.creatingDate.toString();

        return {
            ...data,
            songs: formatListSongsDates(data.songs),
        }
    } catch (error) {
        return null;
    }
}