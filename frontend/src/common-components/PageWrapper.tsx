import {LayoutProps} from "@/types/LayoutProps";
import { motion } from "framer-motion";

type PageWrapperProps = LayoutProps & {
    pt: string,
    pb: string
}

const PageWrapper = (props: PageWrapperProps) => {
    const {children, pt, pb} = props;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, easings: "easeOut"}}
            className={`w-full px-8 ${pt} ${pb}`}>
            {children}
        </motion.div>
    )
}

export default PageWrapper;