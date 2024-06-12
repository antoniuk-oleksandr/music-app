import {LayoutProps} from "@/types/LayoutProps";
import {Fragment} from "react";
import {useMenu} from "@/common-components/Menu/use-menu";

const MenuHandler = (props: LayoutProps) => {
    const {children} = props;
    useMenu();

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default MenuHandler;