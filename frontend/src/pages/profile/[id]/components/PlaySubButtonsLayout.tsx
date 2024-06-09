import {LayoutProps} from "@/types/LayoutProps";

const PlaySubButtonsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-2"}>
            {children}
        </div>
    )
}

export default PlaySubButtonsLayout;