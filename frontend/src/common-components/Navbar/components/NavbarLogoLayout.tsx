import {LayoutProps} from "@/types/LayoutProps";

const NavbarLogoLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center pl-4 text-2xl"}>
            {children}
        </div>
    )
}

export default NavbarLogoLayout;