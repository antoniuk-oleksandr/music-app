import {ReactNode} from "react";

export type MenuItemType = {
    title: string,
    icon?: ReactNode,
    clickAction: (...args: any[]) => void,
}