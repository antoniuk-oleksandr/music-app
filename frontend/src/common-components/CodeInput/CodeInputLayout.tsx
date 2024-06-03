import {LayoutProps} from "@/types/LayoutProps";

const CodeInputLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full grid grid-cols-6 gap-x-2 mb-2"}>
            {children}
        </div>
    )
}

export default CodeInputLayout;