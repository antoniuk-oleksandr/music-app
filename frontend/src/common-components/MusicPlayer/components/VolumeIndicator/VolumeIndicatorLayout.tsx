import {LayoutProps} from "@/types/LayoutProps";

const VolumeIndicatorLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center gap-x-2.5"}>
            {children}
        </div>
    )
}

export default VolumeIndicatorLayout;