import {LayoutProps} from "@/types/LayoutProps";
import {styles} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";

const BannerButtonsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-2 mt-4"}>
            {children}
        </div>
    )
}

export default BannerButtonsLayout;