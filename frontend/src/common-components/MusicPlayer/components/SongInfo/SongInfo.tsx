import SongInfoLayout from "./SongInfoLayout";
import {IoHeartOutline} from "react-icons/io5";
import {useSelector} from "react-redux";
import {Song} from "@/types/Song";
import SongDetails from "@/common-components/MusicPlayer/components/SongDetails/SongDetails";

const SongInfo = () => {
    const song: Song = useSelector((state: any) => state.musicPlayer.song);

    return (
        <SongInfoLayout>
            <img
                src={song.imagePath}
                alt={"cover"}
                className="rounded-md object-center object-cover aspect-square size-12"
            />
            <SongDetails/>
            <IoHeartOutline className="text-2xl cursor-pointer font-semibold ml-4"/>
        </SongInfoLayout>
    )
}

export default SongInfo;