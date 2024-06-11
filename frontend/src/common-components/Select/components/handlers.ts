import {SelectItemType} from "@/types/SelectItemType";
import {Dispatch, SetStateAction} from "react";

export const handleSelectItemClick = (
    item: SelectItemType,
    setSelectItem: Dispatch<SetStateAction<SelectItemType>>,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
) => {
    setSelectItem(item);
    setIsMenuOpened(false);
}