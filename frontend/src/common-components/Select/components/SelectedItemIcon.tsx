import {ReactNode} from "react";

type SelectedItemIconProps = {
    icon: ReactNode,
}

const SelectedItemIcon = (props: SelectedItemIconProps) => {
    const {icon} = props;

    return (
        <div className={"text-2xl mx-3"}>
            {icon}
        </div>
    )
}

export default SelectedItemIcon;