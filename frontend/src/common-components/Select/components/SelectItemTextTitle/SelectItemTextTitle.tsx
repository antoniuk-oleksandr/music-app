import SelectItemTextTitleLayout from "./SelectItemTextTitleLayout";
import {SelectItemType} from "@/types/SelectItemType";

type SelectItemTextTitleProps = {
    item: SelectItemType,
}

const SelectItemTextTitle = (props: SelectItemTextTitleProps) => {
    const {item} = props;
    const {title, text} = item;

    return (
        <SelectItemTextTitleLayout>
            <span className={"font-semibold"}>{title}</span>
            <span>{text}</span>
        </SelectItemTextTitleLayout>
    )
}

export default SelectItemTextTitle;