import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper/Wrapper";

const ProfileInfoBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="absolute bottom-5 left-0 w-full">
            <Wrapper pt={''} pb={''}>
                {children}
            </Wrapper>
        </div>
    )
}

export default ProfileInfoBlockLayout;