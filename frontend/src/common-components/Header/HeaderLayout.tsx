import {LayoutProps} from "@/types/LayoutProps";
import {useScrollbar} from "@/common-components/Header/use-scrollbar";
import {motion} from "framer-motion";

const HeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    const topOffset = useScrollbar();

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, easings: "easeOut"}}
            className={`w-full h-16 flex items-center px-8 justify-between sticky top-0
             ${topOffset > 0 ? 'bg-white' : 'bg-transparent'}`}>
            {children}
        </motion.div>
    )
}

export default HeaderLayout;