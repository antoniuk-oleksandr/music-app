import {Song} from "@/types/Song";
import {handleListPlayButtonClick} from "@/common-components/ListPage/handlers";
import {useDispatch} from "react-redux";
import {useAudio} from "@/common-components/AudioContext";

type ProfilePlayButtonProps = {
    songs: Song[],
}

const ProfilePlayButton = (props: ProfilePlayButtonProps) => {
    const { songs } = props;
    const dispatch = useDispatch();
    const audioElement = useAudio()  as HTMLAudioElement;

    return (
        <button
            onClick = {() => handleListPlayButtonClick(songs, dispatch, audioElement)}
            className={"text-sm font-semibold rounded-[44px] px-8 py-2 bg-white hover:bg-neutral-200 outline-none active:scale-95 duration-200 ease-out"}
            type="button"
        >
            <span className={""}>Play</span>
        </button>
    )
}

export default ProfilePlayButton;