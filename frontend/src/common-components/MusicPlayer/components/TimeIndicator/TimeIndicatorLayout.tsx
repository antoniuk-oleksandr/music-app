import {LayoutProps} from "@/types/LayoutProps";

const TimeIndicatorLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-0.5"}>
            {children}
        </div>
    )
}

export default TimeIndicatorLayout;