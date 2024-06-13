import {LayoutProps} from "@/types/LayoutProps";

const AddSongToPlaylistModalBodyLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="max-h-[90svh] overflow-y-scroll">
            {children}
        </div>
    )
}

export default AddSongToPlaylistModalBodyLayout;