import {LayoutProps} from "@/types/LayoutProps";

const BannerLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"aspect-w-4 aspect-h-1 overflow-hidden"}>
            {children}
        </div>
    )
}

export default BannerLayout;