import {LayoutProps} from "@/types/LayoutProps";

const SongDetailsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex flex-col px-1 h-full justify-center">
            {children}
        </div>
    )
}

export default SongDetailsLayout;