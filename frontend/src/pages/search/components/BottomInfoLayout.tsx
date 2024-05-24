import {LayoutProps} from "@/types/LayoutProps";

const BottomInfoLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex gap-x-1 text-neutral-700">
            {children}
        </div>
    )
}

export default BottomInfoLayout;