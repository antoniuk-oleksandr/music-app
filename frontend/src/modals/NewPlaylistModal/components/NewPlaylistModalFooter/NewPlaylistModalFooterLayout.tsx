import {LayoutProps} from "@/types/LayoutProps";

const NewPlaylistModalFooterLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"p-6 pt-4 flex justify-end"}>
            {children}
        </div>
    )
}

export default NewPlaylistModalFooterLayout;