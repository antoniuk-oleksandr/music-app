import {LayoutProps} from "@/types/LayoutProps";
import { motion } from "framer-motion";

const ProfileListsOverlayLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.2, easings: "easeOut"}}
            className={"top-0 left-0 absolute flex size-full cursor-pointer items-end justify-end"}>
            {children}
        </motion.div>
    )
}

export default ProfileListsOverlayLayout;