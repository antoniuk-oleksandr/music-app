import {ReactNode} from "react";

type MoreSongActionMenuItemIconProps = {
    icon?: ReactNode;
}

const MoreSongActionsMenuItemIcon = (props: MoreSongActionMenuItemIconProps) => {
    const {icon} = props;

    return (
        <div className="text-2xl m-2">
            {icon}
        </div>
    )
}

export default MoreSongActionsMenuItemIcon;