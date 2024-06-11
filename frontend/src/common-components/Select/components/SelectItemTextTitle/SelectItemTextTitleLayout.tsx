import {LayoutProps} from "@/types/LayoutProps";

const SelectItemTextTitleLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col"}>
            {children}
        </div>
    )
}

export default SelectItemTextTitleLayout;