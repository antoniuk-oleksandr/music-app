import {LayoutProps} from "@/types/LayoutProps";
import {MutableRefObject} from "react";

type LightButtonProps = LayoutProps & {
    className?: string,
    onClick?: () => void,
    buttonRef?: MutableRefObject<HTMLButtonElement | null>,
    type?: "button" | "submit" | "reset",
}

const LightButton = (props: LightButtonProps) => {
    const {className, onClick, children, buttonRef, type} = props;

    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            type={type ? type : "button"}
            className={`text-sm bg-white font-semibold rounded-full flex px-4 outline-none active:scale-95 duration-200 ease-out py-2 hover:bg-neutral-200 ${className}`}>
            {children}
        </button>
    )
}

export default LightButton;