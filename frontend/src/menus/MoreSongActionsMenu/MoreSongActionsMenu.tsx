import Menu from "@/common-components/Menu/Menu";
import {useCreateMenu} from "@/menus/useCreateMenu";
import {useDispatch, useSelector} from "react-redux";
import {MenuState} from "@/types/MenuState";
import {getMoreSongActionMenuItems} from "@/menus/MoreSongActionsMenu/MoreSongActionsMenuItems";
import MoreSongActionsMenuItem
    from "@/menus/MoreSongActionsMenu/components/MoreSongActionsMenuItem/MoreSongActionsMenuItem";

const MoreSongActionsMenu = () => {
    const menuName = 'moreSongActionsMenu';
    const dispatch = useDispatch();
    const menuState: MenuState = useSelector((state: any) => state.menus[menuName]);
    const items = getMoreSongActionMenuItems(dispatch, menuState);
    useCreateMenu(menuName, dispatch);

    return (
        <Menu {...menuState} menuName={menuName}>
            {items.map((item, index) => (
                <MoreSongActionsMenuItem menuName={menuName} {...item} key={index}/>
            ))}
        </Menu>
    )
}

export default MoreSongActionsMenu;