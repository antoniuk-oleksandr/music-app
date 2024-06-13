import {getIpAddress} from "@/api/ip-address";
import axios from "axios";
import {SearchTab} from "@/types/SearchTab";
import {Playlist} from "@/types/Playlist";
import {Album} from "@/types/Album";

export const profileListsRequest = async (id: number, type: SearchTab, limit: number, offset: number) => {
    const ip = getIpAddress();
    const loweredType = type.toLowerCase();
    const url = `http://${ip}:8080/api/profiles/${id}/${loweredType}?limit=${limit}&offset=${offset}`;

    try {
        const response = await axios.get(url);
        const data = {...response.data};

        const lists: Playlist[] | Album[] = data[loweredType];
        console.log("idk ", lists[0])


        // const updatedList = lists.map((list) => ({
        //     ...list,
        //     creatingDate: list.creatingDate.toString(),
        // }));
        //
        //
        // console.log(updatedList);

        return data;
    } catch (error) {
        return null;
    }
}