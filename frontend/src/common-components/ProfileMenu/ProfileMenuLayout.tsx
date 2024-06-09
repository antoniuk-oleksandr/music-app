import {LayoutProps} from "@/types/LayoutProps";
import {MutableRefObject} from "react";
import {AnimatePresence, motion} from "framer-motion";

type ProfileMenuLayoutProps = LayoutProps & {
    isMenuOpened: boolean,
    profileMenuRef: MutableRefObject<HTMLDivElement | null>,
}

const ProfileMenuLayout = (props: ProfileMenuLayoutProps) => {
    const {children, isMenuOpened, profileMenuRef} = props;

    return (
        <AnimatePresence>
            {isMenuOpened && (
                <motion.div
                    initial={{opacity: 0, scale: 0.8, originX: 1, originY: 0}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.8, originX: 1, originY: 0}}
                    transition={{duration: 0.2, easings: 'easeOut'}}
                    ref={profileMenuRef}
                    className="absolute top-7 w-[300px] bg-white right-0 rounded-xl">
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ProfileMenuLayout;