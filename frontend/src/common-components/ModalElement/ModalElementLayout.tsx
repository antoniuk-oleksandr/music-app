import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";
import {handleModalBackdropClick} from "@/common-components/ModalElement/handlers";
import {useDispatch, useSelector} from "react-redux";

type ModalElementLayoutProps = LayoutProps & {
    className?: string,
    additionalStyles?: string,
    modalName: string,
}

const ModalElementLayout = (props: ModalElementLayoutProps) => {
    const {children, className, additionalStyles, modalName} = props;
    const modals = useSelector((state: any) => state.modals);
    const dispatch = useDispatch();
    let isOpened = false;

    let currentModal;
    if (modals !== undefined) {
        currentModal = modals[modalName];
    }

    if (currentModal !== undefined) {
        isOpened = currentModal.isOpened;
    }

    return (
        <AnimatePresence>
            {isOpened && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2, easings: 'easeOut'}}
                    onClick={(e) => handleModalBackdropClick(e, dispatch, modalName)}
                    className={"left-0 z-50 top-0 fixed w-full h-screen grid place-items-center bg-neutral-800 bg-opacity-50"}>
                    <div
                        className={`${className ? className : 'bg-white rounded-xl flex flex-col'} ${additionalStyles}`}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ModalElementLayout;