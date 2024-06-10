import {LayoutProps} from "@/types/LayoutProps";
import {MutableRefObject} from "react";

type SelectImageContainerLayoutProps = LayoutProps & {
    inputRef: MutableRefObject<HTMLInputElement | null>,
    aspect: "1:1" | "3:1" | 'none',
    className?: string,
}

const ImageUploaderLayout = (props: SelectImageContainerLayoutProps) => {
    const {children, inputRef, aspect, className} = props;

    return (
        <div
            onClick={() => inputRef.current && inputRef.current.click()}
            className={`relative grid place-items-center border-2 border-dashed border-neutral-400 rounded-md cursor-pointer text-neutral-400 text-5xl m-4
            ${aspect === '3:1' ? 'h-96 w-288' : aspect === '1:1' ? 'size-96' : 'size-full'} ${className}`}>
            {children}
        </div>
    )
}

export default ImageUploaderLayout;