import {LayoutProps} from "@/types/LayoutProps";
import {MutableRefObject} from "react";
import {useDispatch} from "react-redux";
import {useAudio} from "@/common-components/AudioContext";
import {handleListPlayButtonClick} from "@/common-components/ListPage/handlers";
import {Song} from "@/types/Song";

type ProfileListsPlayButtonLayoutProps = LayoutProps & {
    buttonRef?: MutableRefObject<HTMLButtonElement | null>,
    songs: Song[],
    className?: string,
}

const ProfileListsPlayButtonLayout = (props: ProfileListsPlayButtonLayoutProps) => {
    const {children, buttonRef, songs, className} = props;
    const dispatch = useDispatch();
    const audioElement = useAudio() as HTMLAudioElement;

    return (
        <button
            onClick={() => handleListPlayButtonClick(songs, dispatch, audioElement)}
            ref={buttonRef}
            className={`size-10 bg-black-70 active:scale-95 hover:opacity-50 duration-200 ease-out focus:1outline-0 rounded-full grid place-items-center m-2 ${className}`}>
            {children}
        </button>
    )
}

export default ProfileListsPlayButtonLayout;