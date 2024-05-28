import HeaderLayout from "./HeaderLayout";
import LeftSide from "@/common-components/Header/components/LeftSide/LeftSide";
import RightSide from "@/common-components/Header/components/RightSide/RightSide";
import {useCurrentPage} from "@/common-components/Header/use-current-page";

const Header = () => {

    return (
        <HeaderLayout>
            <LeftSide/>
            <RightSide/>
        </HeaderLayout>
    )
}

export default Header;