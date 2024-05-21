import {LayoutProps} from "@/types/LayoutProps";

const PlayLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex basis-1/3 items-center justify-center w-full gap-x-6">
            {children}
        </div>
    )
}

export default PlayLayout;