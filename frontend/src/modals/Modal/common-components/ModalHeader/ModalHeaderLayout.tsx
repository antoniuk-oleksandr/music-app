import {LayoutProps} from "@/types/LayoutProps";

const ModalHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"pt-6 px-6 text-lg font-semibold flex items-center justify-between"}>
            {children}
        </div>
    )
}

export default ModalHeaderLayout;