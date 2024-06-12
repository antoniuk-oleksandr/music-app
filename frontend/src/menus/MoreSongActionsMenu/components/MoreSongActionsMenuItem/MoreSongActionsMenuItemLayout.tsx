import {LayoutProps} from "@/types/LayoutProps";
import {useDispatch} from "react-redux";
import {setIsMenuOpened} from "@/redux/reducers/menu-slice";

type MoreSongActionsMenuItemLayoutProps = LayoutProps & {
    menuName: string,
    clickAction: () => void,
}

const MoreSongActionsMenuItemLayout = (props: MoreSongActionsMenuItemLayoutProps) => {
    const {children, menuName, clickAction} = props;
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => {
                clickAction();
                dispatch(setIsMenuOpened({menuName, isOpened: false}));
            }}
            className={"flex items-center gap-x-2 text-sm font-semibold py-1 px-2 duration-200 ease-out hover:bg-neutral-300 cursor-pointer"}>
            {children}
        </div>
    )
}

export default MoreSongActionsMenuItemLayout;