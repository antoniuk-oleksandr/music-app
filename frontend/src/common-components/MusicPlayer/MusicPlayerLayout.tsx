import {LayoutProps} from "@/types/LayoutProps";

const MusicPlayerLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"fixed bottom-0 z-10 w-full"}>
            <div className="flex w-full bg-white overflow-x-clip flex-col relative">
                {children}
            </div>
        </div>
    )
}

export default MusicPlayerLayout;