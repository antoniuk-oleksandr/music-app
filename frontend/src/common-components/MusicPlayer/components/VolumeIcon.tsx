import {IoVolumeHigh, IoVolumeMute} from "react-icons/io5";
import {useAudio} from "@/utils/AudioContext";
import {handleVolumeButtonClick} from "@/common-components/MusicPlayer/handlers";

const VolumeIcon = () => {
    const audioElement = useAudio();
    const buttonStyle = "text-2xl cursor-pointer";

    if (audioElement?.muted || audioElement?.volume === 0) return (
        <IoVolumeMute
            id={'volume-on-button'}
            onClick={(e) => handleVolumeButtonClick(e, audioElement)}
            className={buttonStyle}
        />
    )
    else return (
        <IoVolumeHigh
            id='volume-off-button'
            onClick={(e) => handleVolumeButtonClick(e, audioElement)}
            className={buttonStyle}
        />
    )
}

export default VolumeIcon;