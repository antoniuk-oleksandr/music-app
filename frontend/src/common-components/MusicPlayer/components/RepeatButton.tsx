import { Repeat } from "@/types/Repeat";
import { Dispatch, SetStateAction } from "react";
import { handleRepeatButtonClick } from "@/common-components/MusicPlayer/handlers";
import { MdOutlineLoop } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";

const RepeatButton = () => {
    const buttonStyle = "text-2xl cursor-pointer";
    const dispatch = useDispatch();
    const repeat = useSelector((state: any) => state.musicPlayer.repeat);
    const handleClick = () => handleRepeatButtonClick(dispatch, repeat);

    return (
        <div
            onClick={handleClick}
            className={`${buttonStyle} relative grid place-items-center ${
                repeat === Repeat.Queue ? 'text-red-500' : ''
            }`}
        >
            {repeat === Repeat.Song && (
                <span className="absolute text-[8px] font-semibold mt-[1px]">1</span>
            )}
            <MdOutlineLoop />
        </div>
    );
};

export default RepeatButton;
