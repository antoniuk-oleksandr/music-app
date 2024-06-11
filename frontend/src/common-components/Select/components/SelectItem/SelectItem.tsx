import SelectItemLayout from "./SelectItemLayout";
import {SelectItemType} from "@/types/SelectItemType";
import {Dispatch, SetStateAction} from "react";
import SelectItemIcon from "@/common-components/Select/components/SelectItemIcon";
import SelectItemTextTitle from "@/common-components/Select/components/SelectItemTextTitle/SelectItemTextTitle";

type SelectItemProps = {
    item: SelectItemType,
    setSelectedItem: (value: any) => void,
    last: boolean,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const SelectItem = (props: SelectItemProps) => {
    const {item} = props;
    const {icon} = item;

    return (
        <SelectItemLayout {...props}>
            <SelectItemIcon icon={icon}/>
            <SelectItemTextTitle {...props}/>
        </SelectItemLayout>
    )
}

export default SelectItem;