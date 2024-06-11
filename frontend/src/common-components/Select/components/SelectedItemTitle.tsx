import SelectedItemIcon from "@/common-components/Select/components/SelectedItemIcon";
import {SelectItemType} from "@/types/SelectItemType";

type SelectedItemTitleProps = {
    selectedItem: SelectItemType,
}

const SelectedItemTitle = (props: SelectedItemTitleProps) => {
    const {selectedItem} = props;
    const {title, icon} = selectedItem;

    return (
        <div className={"flex items-center text-sm"}>
            <SelectedItemIcon icon={icon}/>
            <span className={"font-semibold"}>{title}</span>
        </div>
    )
}

export default SelectedItemTitle