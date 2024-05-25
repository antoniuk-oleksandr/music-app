import {LayoutProps} from "@/types/LayoutProps";

const ListHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-12 items-center mb-12"}>
            {children}
        </div>
    )
}

export default ListHeaderLayout;