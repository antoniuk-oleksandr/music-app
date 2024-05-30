import {LayoutProps} from "@/types/LayoutProps";
import { motion } from "framer-motion";
import {useDevice} from "@/common-components/Wrapper/use-device";
import {getWrapperWidth} from "@/utils/utils";
import {useSelector} from "react-redux";

type PageWrapperProps = LayoutProps & {
    pt: string,
    pb: string
}

const Wrapper = (props: PageWrapperProps) => {
    const {children, pt, pb} = props;
    const {device, isNavbarHidden} =  useSelector((state: any) => state.wrapper);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, easings: "easeOut"}}
            style={{width: getWrapperWidth(device, isNavbarHidden)}}
            className={`w-full mx-auto mobile:w-full mobile:px-4 ${pt} ${pb}`}>
            {children}
        </motion.div>
    )
}

export default Wrapper;