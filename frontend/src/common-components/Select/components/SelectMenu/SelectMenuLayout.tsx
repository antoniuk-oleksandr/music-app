import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type SelectMenuLayoutProps = LayoutProps & {
    isMenuOpened: boolean,
    menuWidth: string,
}

const SelectMenuLayout = (props: SelectMenuLayoutProps) => {
    const {children, isMenuOpened, menuWidth} = props;

    return (
        <AnimatePresence>
            {isMenuOpened && (
                <motion.div
                    initial={{opacity: 0, translateY: -10}}
                    animate={{opacity: 1, translateY: 0}}
                    exit={{opacity: 0, translateY: -10}}
                    transition={{duration: 0.2, easings: 'easeOut'}}
                    className={`absolute mt-13 top-0 left-0 bg-neutral-100 rounded-b-md shadow-lg border-t border-neutral-300 ${menuWidth}`}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SelectMenuLayout;