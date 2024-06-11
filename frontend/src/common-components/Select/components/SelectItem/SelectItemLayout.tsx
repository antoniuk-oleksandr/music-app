import {LayoutProps} from "@/types/LayoutProps";
import {SelectItemType} from "@/types/SelectItemType";
import {Dispatch, SetStateAction} from "react";
import {handleSelectItemClick} from "@/common-components/Select/components/handlers";

type SelectItemLayoutProps = LayoutProps & {
    item: SelectItemType,
    setSelectedItem: (value: any) => void,
    last: boolean,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const SelectItemLayout = (props: SelectItemLayoutProps) => {
    const {children, last, item, setSelectedItem, setIsMenuOpened} = props;

    return (
        <div
            onClick={() => handleSelectItemClick(item, setSelectedItem, setIsMenuOpened)}
            className={`flex items-center h-13 text-sm pr-4 hover:bg-neutral-200 cursor-pointer 
            ${last ? 'rounded-b-md' : ''}`}>
            {children}
        </div>
    )
}

export default SelectItemLayout;