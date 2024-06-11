import ModalElementLayout from "./ModalElementLayout";
import {LayoutProps} from "@/types/LayoutProps";

type ModalElementProps = LayoutProps & {
    className?: string,
    additionalStyles?: string,
    name: string,
}

const ModalElement = (props: ModalElementProps) => {
    const {children} = props;

    return (
        <ModalElementLayout {...props}>
            {children}
        </ModalElementLayout>
    )
}

export default ModalElement;