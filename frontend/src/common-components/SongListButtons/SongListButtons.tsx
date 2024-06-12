import {Song} from "@/types/Song";
import {IoHeartOutline} from "react-icons/io5";
import {AnimatePresence, motion} from "framer-motion";
import {BsThreeDotsVertical} from "react-icons/bs";
import SongListButtonLayout from "@/common-components/SongListButtons/components/SongListButtonLayout";
import {useRef} from "react";
import {handleMoreSongsActionsClick} from "@/common-components/SongListButtons/handlers";
import {useDispatch} from "react-redux";

type SongListButtonsProps = {
    song: Song,
    isShown: boolean,
}

const SongListButtons = (props: SongListButtonsProps) => {
    const {song, isShown} = props;
    const dispatch = useDispatch();

    return (
        <div>
            <AnimatePresence>
                {isShown && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                        className={"flex"}
                    >
                        <SongListButtonLayout>
                            <IoHeartOutline/>
                        </SongListButtonLayout>
                        <SongListButtonLayout
                            onClick={(e) => handleMoreSongsActionsClick(e, dispatch)}
                        >
                            <BsThreeDotsVertical/>
                        </SongListButtonLayout>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SongListButtons;