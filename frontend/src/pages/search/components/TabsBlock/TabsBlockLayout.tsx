import {LayoutProps} from "@/types/LayoutProps";

const TabsBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-2 py-2"}>
            {children}
        </div>
    )
}

export default TabsBlockLayout;