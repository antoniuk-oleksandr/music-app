import {LayoutProps} from "@/types/LayoutProps";
import {motion} from "framer-motion";

const ProfilePageLayoutLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, easings: "easeOut"}}
            className={"mb-48"}
        >
            {children}
        </motion.div>
    )
}

export default ProfilePageLayoutLayout;