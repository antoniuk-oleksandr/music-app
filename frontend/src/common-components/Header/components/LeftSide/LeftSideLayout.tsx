import {LayoutProps} from "@/types/LayoutProps";

const LeftSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default LeftSideLayout;