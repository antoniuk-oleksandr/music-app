import {IconHoverState} from "@/types/IconHoverState";
import {IoIosPause, IoIosPlay, IoIosVolumeHigh} from "react-icons/io";

type SongOverlayIconProps = {
    iconState: IconHoverState;
}

const ElementOverlayIcon = (props: SongOverlayIconProps) => {
    const {iconState} = props;
    const style = "text-xl cursor-pointer";

    switch (iconState) {
        case IconHoverState.Play:
            return <IoIosPlay className={style}/>
        case IconHoverState.Pause:
            return <IoIosPause className={style}/>
        case IconHoverState.Sound:
            return <IoIosVolumeHigh className={style}/>
    }
}

export default ElementOverlayIcon;