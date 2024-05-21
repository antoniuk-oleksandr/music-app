import {LayoutProps} from "@/types/LayoutProps";

const NavbarLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex flex-col w-67.5 bg-white h-svh top-0 sticky">
            {children}
        </div>
    )
}

export default NavbarLayout;