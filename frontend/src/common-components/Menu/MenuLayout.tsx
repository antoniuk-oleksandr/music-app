import {LayoutProps} from "@/types/LayoutProps";
import {MenuState} from "@/types/MenuState";
import {AnimatePresence, motion} from "framer-motion";
import {handleMenuBackdropClick} from "@/common-components/Menu/handlers";
import {useDispatch} from "react-redux";
import MenuHandler from "@/common-components/Menu/MenuHandler";

type MenuLayoutProps = LayoutProps & MenuState & {
    menuName: string,
};

const MenuLayout = (props: MenuLayoutProps) => {
    const {children, x, y, isOpened, menuName} = props;
    const dispatch = useDispatch();

    return (
        <AnimatePresence>
            {isOpened && (
                <div
                    onClick={(e) => handleMenuBackdropClick(e, menuName, dispatch)}
                    className={"fixed w-svw h-svh z-30"}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.8, originX: 1, originY: 0}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.8, originX: 1, originY: 0}}
                        transition={{duration: 0.2, easings: 'easeOut'}}
                        style={{top: `${y}px`, left: `${x && x - 240}px`}}
                        className={"w-60 bg-neutral-200 absolute rounded-md py-4 shadow-lg"}>
                        <MenuHandler>
                            {children}
                        </MenuHandler>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default MenuLayout;