import {LayoutProps} from "@/types/LayoutProps";

const LeftSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex items-center">
            {children}
        </div>
    )
}

export default LeftSideLayout;