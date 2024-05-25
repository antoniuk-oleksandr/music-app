import {LayoutProps} from "@/types/LayoutProps";

const ListInfoButtonsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-2 items-center pt-6"}>
            {children}
        </div>
    )
}

export default ListInfoButtonsLayout;