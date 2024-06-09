import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";
import {DialogState} from "@/types/DialogState";

type DialogLayoutProps = LayoutProps & {
    dialogState: DialogState,
}

const DialogLayout = (props: DialogLayoutProps) => {
    const {children, dialogState} = props;
    let {isShown, color} = dialogState;

    return (
            <AnimatePresence>
                {isShown && (
                    <motion.div
                        initial={{x: -32, opacity: 0}}
                        animate={{x: 32, opacity: 1}}
                        exit={{x: 0, opacity: 0}}
                        transition={{duration: 0.3}}
                        className={`absolute bg-white min-w-96 mb-6 bottom-0 p-3 rounded-md shadow z-40 text-lg ${color}`}>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
    );
};

export default DialogLayout;
