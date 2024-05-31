import {LayoutProps} from "@/types/LayoutProps";

const NoAccountMessageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-1"}>
            {children}
        </div>
    )
}

export default NoAccountMessageLayout;