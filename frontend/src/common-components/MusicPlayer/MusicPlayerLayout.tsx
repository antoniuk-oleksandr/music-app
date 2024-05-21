import {LayoutProps} from "@/types/LayoutProps";

const MusicPlayerLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex absolute bottom-0 w-full z-10 bg-white overflow-x-clip flex-col">
            {children}
        </div>
    )
}

export default MusicPlayerLayout;