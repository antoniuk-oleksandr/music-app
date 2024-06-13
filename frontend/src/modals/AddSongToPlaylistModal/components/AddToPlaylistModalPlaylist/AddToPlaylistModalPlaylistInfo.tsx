import {Song} from "@/types/Song";

type AddToPlaylistModalPlaylistInfo = {
    songs: Song[],
    name: string,
}

const AddToPlaylistModalPlaylistInfo = (props: AddToPlaylistModalPlaylistInfo)  => {
    const {name, songs} = props;

    return (
        <div className={"flex flex-col text-sm"}>
            <p className={"font-semibold truncate max-w-69"}>{name}</p>
            <p>{songs.length} songs</p>
        </div>
    )
}

export default AddToPlaylistModalPlaylistInfo;