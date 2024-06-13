import {LayoutProps} from "@/types/LayoutProps";
import {motion} from "framer-motion";
import {getWrapperWidth} from "@/utils/utils";
import {useSelector} from "react-redux";
import {Device} from "@/types/Device";
import {useCurrentPage} from "@/common-components/Header/use-current-page";

type PageWrapperProps = LayoutProps & {
    isHeader?: boolean,
    pt: string,
    pb: string,
}

const Wrapper = (props: PageWrapperProps) => {
    const {children, pt, pb, isHeader} = props;
    const {device, isNavbarHidden} = useSelector((state: any) => state.wrapper);
    const currentPage = useCurrentPage();

    return (
        <div className={currentPage === '/profile/[id]' && isHeader ? 'ml-[270px] w-[calc(100%-270px)]' : 'w-full'}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3, easings: "easeOut"}}
                style={{width: getWrapperWidth(Device.Desktop, false)}}
                className={`w-full mx-auto mobile:w-full mobile:px-4 ${pt} ${pb}`}>
                {children}
            </motion.div>
        </div>
    )
}

export default Wrapper;