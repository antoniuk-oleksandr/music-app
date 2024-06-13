import {LayoutProps} from "@/types/LayoutProps";

const PlayListsBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="py-4 px-2 gap-y-6">
            {children}
        </div>
    )
}

export default PlayListsBlockLayout;