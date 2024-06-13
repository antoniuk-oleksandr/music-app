import SongInfoLayout from "./SongInfoLayout";
import {IoHeartOutline} from "react-icons/io5";
import {useSelector} from "react-redux";
import {Song} from "@/types/Song";
import SongDetails from "@/common-components/MusicPlayer/components/SongDetails/SongDetails";
import {formatUrl} from "@/utils/utils";

const SongInfo = () => {
    const song: Song = useSelector((state: any) => state.musicPlayer.song);

    if (!song || Object.entries(song).some(([key, value]) =>
        (key !== 'album' && (value === null || value === undefined)))) return null;
    return (
        <SongInfoLayout>
            <img
                src={formatUrl(song.imagePath)}
                alt={"cover"}
                className="rounded-md object-center object-cover aspect-square size-12"
            />
            <SongDetails/>
            <IoHeartOutline className="text-2xl cursor-pointer font-semibold ml-4"/>
        </SongInfoLayout>
    )
}

export default SongInfo;