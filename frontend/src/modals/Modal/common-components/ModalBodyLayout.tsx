import {LayoutProps} from "@/types/LayoutProps";

const ModalBodyLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"p-6"}>
            {children}
        </div>
    )
}

export default ModalBodyLayout;