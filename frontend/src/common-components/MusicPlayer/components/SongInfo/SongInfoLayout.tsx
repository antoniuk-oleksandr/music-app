import {LayoutProps} from "@/types/LayoutProps";

const SongInfoLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex h-full items-center gap-x-2 basis-1/3"}>
            {children}
        </div>
    )
}

export default SongInfoLayout;