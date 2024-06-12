import {LayoutProps} from "@/types/LayoutProps";
import React from "react";

type SongListButtonLayoutProps = LayoutProps & {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

const SongListButtonLayout = (props: SongListButtonLayoutProps) => {
    const {children, onClick} = props;

    return (
        <div
            onClick={(e) => onClick && onClick(e)}
            className={"size-9 grid place-items-center text-xl cursor-pointer font-semibold rounded-full hover:bg-neutral-200 duration-200 ease-out active:scale-95"}>
            {children}
        </div>
    )
}

export default SongListButtonLayout;