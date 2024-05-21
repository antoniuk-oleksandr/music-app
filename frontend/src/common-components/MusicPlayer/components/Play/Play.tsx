import PlayLayout from "./PlayLayout";
import {IoPauseCircle, IoPlayCircle, IoPlaySkipBack, IoPlaySkipForward, IoShuffleOutline} from "react-icons/io5";
import {MdOutlineLoop} from "react-icons/md";

type PlayProps = {
    isStopped: boolean,
}

const Play = (props: PlayProps) => {
    const {isStopped} = props;

    return (
        <PlayLayout>
            <IoShuffleOutline className={"text-2xl"}/>
            <IoPlaySkipBack className={"text-2xl"}/>
            {isStopped ? <IoPlayCircle className={"text-4xl"}/> : <IoPauseCircle className={"text-4xl"}/>}
            <IoPlaySkipForward className={"text-2xl"}/>
            <MdOutlineLoop className={"text-2xl"}/>
        </PlayLayout>
    )
}

export default Play;