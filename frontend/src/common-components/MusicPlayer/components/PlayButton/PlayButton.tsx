import {IoPauseCircle, IoPlayCircle} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {useAudio} from "@/common-components/AudioContext";
import {usePlayButton} from "@/common-components/MusicPlayer/use-effects/use-play-button";
import {handlePlayButtonClick} from "@/common-components/MusicPlayer/handlers";

const PlayButton = () => {
    const audioElement = useAudio();
    const isPlaying = usePlayButton();
    const buttonStyle = "text-4xl cursor-pointer";

    if (isPlaying) return (
        <IoPauseCircle
            id='pause-button'
            onClick={(e) => handlePlayButtonClick(e, audioElement)}
            className={buttonStyle}
        />
    )
    else return (
        <IoPlayCircle
            id='play-button'
            onClick={(e) => handlePlayButtonClick(e, audioElement)}
            className={buttonStyle}
        />
    )
}

export default PlayButton