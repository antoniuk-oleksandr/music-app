import {LayoutProps} from "@/types/LayoutProps";

const LeftAddMusicModalSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex justify-between gap-x-4 p-6">
            {children}
        </div>
    )
}

export default LeftAddMusicModalSideLayout;