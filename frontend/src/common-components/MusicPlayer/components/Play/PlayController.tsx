import PlayLayout from "./PlayLayout";
import {IoPlaySkipBack, IoPlaySkipForward, IoShuffleOutline} from "react-icons/io5";
import {MdOutlineLoop} from "react-icons/md";
import PlayButton from "@/common-components/MusicPlayer/components/PlayButton/PlayButton";

const PlayController = () => {
    const buttonStyle = "text-2xl cursor-pointer";
    
    return (
        <PlayLayout>
            <IoShuffleOutline className={buttonStyle}/>
            <IoPlaySkipBack className={buttonStyle}/>
            <PlayButton/>
            <IoPlaySkipForward className={buttonStyle}/>
            <MdOutlineLoop className={buttonStyle}/>
        </PlayLayout>
    )
}

export default PlayController;