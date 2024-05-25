import {Playlist} from "@/types/Playlist";
import {Album} from "@/types/Album";
import {ListType} from "@/types/ListType";

export type ListPageProps = {
    listType: ListType;
    list: Playlist | Album;
}