import {LayoutProps} from "@/types/LayoutProps";

const LeftAddMusicModalSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex justify-between">
            {children}
        </div>
    )
}

export default LeftAddMusicModalSideLayout;