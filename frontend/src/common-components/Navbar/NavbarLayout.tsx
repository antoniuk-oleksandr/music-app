import {LayoutProps} from "@/types/LayoutProps";
import { motion } from "framer-motion";

type NavbarLayoutProps = LayoutProps & {
    isNavbarHidden: boolean,
}

const NavbarLayout = (props: NavbarLayoutProps) => {
    const {children, isNavbarHidden} = props;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, easings: "easeOut"}}
            className={`flex flex-col h-svh top-0 z-20 small:fixed mobile:fixed 
            ${isNavbarHidden ? 'bg-transparent fixed mt-16' : 'min-w-67.5 sticky bg-white'}`}>
            {children}
        </motion.div>
    )
}

export default NavbarLayout;