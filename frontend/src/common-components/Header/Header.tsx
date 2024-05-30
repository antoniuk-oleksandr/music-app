import HeaderLayout from "./HeaderLayout";
import LeftSide from "@/common-components/Header/components/LeftSide/LeftSide";
import RightSide from "@/common-components/Header/components/RightSide/RightSide";

const Header = () => {
    return (
        <HeaderLayout>
            <LeftSide/>
            <RightSide/>
        </HeaderLayout>
    )
}

export default Header;