import {LayoutProps} from "@/types/LayoutProps";
import { motion } from "framer-motion";

type PageWrapperProps = LayoutProps & {
    pt: string,
    pb: string
}

const Wrapper = (props: PageWrapperProps) => {
    const {children, pt, pb} = props;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, easings: "easeOut"}}
            className={`w-full mx-auto px-[98.5px] ${pt} ${pb}`}>
            {children}
        </motion.div>
    )
}

export default Wrapper;