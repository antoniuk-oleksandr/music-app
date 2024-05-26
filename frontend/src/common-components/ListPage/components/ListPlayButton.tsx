import {IoPlay} from "react-icons/io5";
import {ListPageProps} from "@/types/ListPageProps";
import {handleListPlayButtonClick} from "@/common-components/ListPage/handlers";
import {useDispatch} from "react-redux";
import {useAudio} from "@/common-components/AudioContext";

const ListPlayButton = (props: ListPageProps) => {
    const {list} = props;
    const dispatch = useDispatch();
    const audioElement = useAudio() as HTMLAudioElement;

    return (
        <button
            onClick={() => handleListPlayButtonClick(list.songs, dispatch, audioElement)}
            className={"font-medium flex gap-x-1.5 items-center py-1.5 bg-white rounded-full px-4 hover:bg-neutral-200 focus:outline-0 active:scale-95"}
            type="button"
        >
            <IoPlay/>
            <span>Play</span>
        </button>
    )
}

export default ListPlayButton