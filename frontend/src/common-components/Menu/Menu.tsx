import MenuLayout from "./MenuLayout";
import {LayoutProps} from "@/types/LayoutProps";
import {MenuState} from "@/types/MenuState";

type MenuProps = LayoutProps & MenuState & {
    menuName: string,
};

const Menu = (props: MenuProps) => {
    const {children} = props;

    return (
        <MenuLayout {...props}>
            {children}
        </MenuLayout>
    )
}

export default Menu;