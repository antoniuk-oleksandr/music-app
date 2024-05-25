import {LayoutProps} from "@/types/LayoutProps";

const PlaylistFirstColumnLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex items-center gap-x-4">
            {children}
        </div>
    )
}

export default PlaylistFirstColumnLayout;