import {AnimatePresence, motion} from "framer-motion";

type SelectorProps = {
    isSelected: boolean
}

const Selector = (props: SelectorProps) => {
    const {isSelected} = props;

    return (
        <AnimatePresence>
            {isSelected && (
                <>
                    <motion.div
                        initial={{width: 0}}
                        animate={{width: 6}}
                        exit={{width: 0}}
                        transition={{duration: 0.15}}
                        className={"absolute bg-red-500 right-0 h-full w-1.5 rounded-l"}>
                    </motion.div>
                    <motion.div
                        initial={{width: 0}}
                        animate={{width: '100%'}}
                        exit={{width: 0}}
                        transition={{duration: 0.3}}
                        className={"absolute right-0 h-full w-full bg-gradient-to-r from-gray-100 cursor-pointer"}>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Selector;