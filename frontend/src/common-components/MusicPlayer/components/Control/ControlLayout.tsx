import {LayoutProps} from "@/types/LayoutProps";

const ControlLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="px-4 py-3 flex">
            {children}
        </div>
    )
}

export default ControlLayout;