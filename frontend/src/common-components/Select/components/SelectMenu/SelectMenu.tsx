import SelectMenuLayout from "./SelectMenuLayout";
import SelectItem from "@/common-components/Select/components/SelectItem/SelectItem";
import {SelectItemType} from "@/types/SelectItemType";
import {Dispatch, SetStateAction} from "react";

type SelectMenuProps = {
    items: SelectItemType[],
    setSelectedItem: (value: any) => void,
    menuWidth: string,
    isMenuOpened: boolean,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const SelectMenu = (props: SelectMenuProps) => {
    const {items} = props;

    return (
        <SelectMenuLayout {...props}>
            {items.map((item, index) => (
                <SelectItem
                    {...props}
                    last={index === items.length - 1}
                    item={item}
                    key={index}
                />
            ))}
        </SelectMenuLayout>
    )
}

export default SelectMenu;