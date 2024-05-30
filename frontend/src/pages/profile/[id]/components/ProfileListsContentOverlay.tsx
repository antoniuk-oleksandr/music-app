import {motion} from "framer-motion";

const ProfileListsContentOverlay = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.2, easings: "easeOut"}}
            className="w-full bg-black-gradient absolute h-full top-0 left-0"></motion.div>
    )
}

export default ProfileListsContentOverlay;