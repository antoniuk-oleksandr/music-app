import {LayoutProps} from "@/types/LayoutProps";
import {MutableRefObject} from "react";
import {AnimatePresence, motion} from "framer-motion";

type FileUploaderContainerLayoutProps = LayoutProps & {
    fileUploaderRef: MutableRefObject<HTMLDivElement | null>,
    isFileUploaderOpened: boolean,
}

const FileUploaderContainerLayout = (props: FileUploaderContainerLayoutProps) => {
    const {children, fileUploaderRef, isFileUploaderOpened} = props;

    return (
        <>
            <AnimatePresence>
                {isFileUploaderOpened && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed top-0 left-0 bg-neutral-800 bg-opacity-50 w-full h-svh grid place-items-center z-30">
                        <div
                            ref={fileUploaderRef}
                            className={`bg-white rounded-xl flex flex-col items-end`}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default FileUploaderContainerLayout;