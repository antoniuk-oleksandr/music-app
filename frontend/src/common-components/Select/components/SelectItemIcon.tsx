import {ReactNode} from "react";

type SelectItemIconProps = {
    icon: ReactNode;
}

const SelectItemIcon = (props: SelectItemIconProps) => {
    const {icon} = props;
    
    return (
        <div className={"text-2xl mx-3"}>
            {icon}
        </div>
    )
}

export default SelectItemIcon;