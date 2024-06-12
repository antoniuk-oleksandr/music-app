import MoreSongActionsMenuItemLayout from "./MoreSongActionsMenuItemLayout";
import MoreSongActionsMenuItemIcon from "@/menus/MoreSongActionsMenu/components/MoreSongActionsMenuItemIcon";
import {MenuItemType} from "@/types/MenuItemType";

type MoreSongActionsMenuItemProps = MenuItemType & {
    menuName: string,
};

const MoreSongActionsMenuItem = (props: MoreSongActionsMenuItemProps) => {
    const {title} = props;

    return (
        <MoreSongActionsMenuItemLayout {...props}>
            <MoreSongActionsMenuItemIcon {...props}/>
            <span>{title}</span>
        </MoreSongActionsMenuItemLayout>
    )
}

export default MoreSongActionsMenuItem;