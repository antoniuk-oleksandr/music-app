import {LayoutProps} from "@/types/LayoutProps";

const PlaylistsHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"text-xs font-semibold uppercase flex justify-between items-center"}>
            {children}
        </div>
    )
}

export default PlaylistsHeaderLayout;