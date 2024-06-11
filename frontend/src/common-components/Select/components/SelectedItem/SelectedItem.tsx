import SelectedItemLayout from "./SelectedItemLayout";
import {SelectItemType} from "@/types/SelectItemType";
import {IoChevronDown} from "react-icons/io5";
import SelectedItemTitle from "@/common-components/Select/components/SelectedItemTitle";
import {Dispatch, SetStateAction} from "react";

type SelectedItemProps = {
    selectedItem: SelectItemType,
    isMenuOpened: boolean,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const SelectedItem = (props: SelectedItemProps) => {
    return (
        <SelectedItemLayout {...props}>
            <SelectedItemTitle {...props}/>
            <IoChevronDown/>
        </SelectedItemLayout>
    )
}

export default SelectedItem;