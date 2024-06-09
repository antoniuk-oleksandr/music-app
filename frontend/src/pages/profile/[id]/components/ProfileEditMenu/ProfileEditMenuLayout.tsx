import {MutableRefObject} from "react";
import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type ProfileEditMenuLayoutProps = LayoutProps & {
    menuRef: MutableRefObject<HTMLDivElement | null>,
    isOpened: boolean,
}

const ProfileEditMenuLayout = (props: ProfileEditMenuLayoutProps) => {
    const {menuRef, children, isOpened} = props;

    return (
        <AnimatePresence>
            {isOpened && (
                <motion.div
                    initial={{opacity: 0, scale: 0.8, originX: 1, originY: 0}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.8, originX: 1, originY: 0}}
                    transition={{duration: 0.2, easings: 'easeOut'}}
                    ref={menuRef}
                    className="absolute top-9 py-2 right-0 bg-white w-48 rounded-md">
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ProfileEditMenuLayout;