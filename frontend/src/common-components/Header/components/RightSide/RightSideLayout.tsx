import {LayoutProps} from "@/types/LayoutProps";

const RightSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default RightSideLayout;