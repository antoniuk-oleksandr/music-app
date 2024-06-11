import SelectLayout from "./SelectLayout";
import {SelectItemType} from "@/types/SelectItemType";
import {Dispatch, SetStateAction} from "react";
import SelectMenu from "@/common-components/Select/components/SelectMenu/SelectMenu";
import SelectedItem from "@/common-components/Select/components/SelectedItem/SelectedItem";

type SelectProps = {
    items: SelectItemType[],
    menuWidth: string,
    selectedItem: SelectItemType,
    setSelectedItem: (value: any) => void,
    isMenuOpened: boolean,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const Select = (props: SelectProps) => {
    return (
        <SelectLayout {...props}>
            <SelectedItem {...props}/>
            <SelectMenu {...props}/>
        </SelectLayout>
    )
}

export default Select;