import SongDetailsLayout from "./SongDetailsLayout";
import {Song} from "@/types/Song";
import {useSelector} from "react-redux";

const SongDetails = () => {
    const song: Song = useSelector((state: any) => state.musicPlayer.song);

    return (
        <SongDetailsLayout>
            <span className={"text-lg font-semibold select-text"}>{song.name}</span>
            <span
                className={"text-sm select-text hover:underline cursor-pointer w-fit ease-out duration-200"}>Artist</span>
        </SongDetailsLayout>
    )
}

export default SongDetails;