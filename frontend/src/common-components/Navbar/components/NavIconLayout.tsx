import {LayoutProps} from "@/types/LayoutProps";

type NavIconLayoutProps = LayoutProps & {
    isSelected: boolean,
}

const NavIconLayout = (props: NavIconLayoutProps) => {
    const {children, isSelected} = props;

    return (
        <div className={`text-2xl z-10 ${isSelected && "text-red-500"}`}>
            {children}
        </div>
    )
}

export default NavIconLayout;