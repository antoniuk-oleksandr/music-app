import { IoPauseCircle, IoPlayCircle } from "react-icons/io5";
import { useAudio } from "@/common-components/AudioContext";
import { usePlayButton } from "@/common-components/MusicPlayer/use-effects/use-play-button";
import { handlePlayButtonClick } from "@/common-components/MusicPlayer/handlers";

const PlayButton = () => {
    const audioElement = useAudio();
    const isPlaying = usePlayButton();
    const buttonStyle = "text-4xl cursor-pointer";

    const Icon = isPlaying ? IoPauseCircle : IoPlayCircle;
    const buttonId = isPlaying ? 'pause-button' : 'play-button';

    return (
        <Icon
            id={buttonId}
            onClick={(e) => handlePlayButtonClick(e, audioElement)}
            className={buttonStyle}
        />
    );
};

export default PlayButton;
