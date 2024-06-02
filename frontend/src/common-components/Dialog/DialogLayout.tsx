import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";
import {DialogState} from "@/types/DialogState";

type DialogLayoutProps = LayoutProps & {
    dialogState: DialogState,
}

const DialogLayout = (props: DialogLayoutProps) => {
    const {children, dialogState} = props;
    const {isShown, color} = dialogState;

    return (
        <div className={"absolute w-full h-screen bg-transparent flex items-end"}>
            <AnimatePresence>
                {isShown && (
                    <motion.div
                        initial={{x: -32, opacity: 0}}
                        animate={{x: 32, opacity: 1}}
                        exit={{x: 0, opacity: 0}}
                        transition={{duration: 0.3}}
                        className={`bg-white w-96 mb-6 px-2 py-4 rounded-md shadow ${color}`}>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DialogLayout;
