import {LayoutProps} from "@/types/LayoutProps";

const PlaylistSongsListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"px-2"}>
            {children}
        </div>
    )
}

export default PlaylistSongsListLayout;