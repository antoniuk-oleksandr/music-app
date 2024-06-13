import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence} from "framer-motion";

type NavbarPlaylistButtonLayoutProps = LayoutProps & {
    isHovered: boolean;
}

const NavbarPlaylistButtonLayout = (props: NavbarPlaylistButtonLayoutProps) => {
    const {children, isHovered} = props;

    return (
        <AnimatePresence>
            {isHovered && (
                <div className={"absolute top-0 bottom-0 flex items-center right-4"}>
                    {children}
                </div>
            )}
        </AnimatePresence>
    )
}

export default NavbarPlaylistButtonLayout;