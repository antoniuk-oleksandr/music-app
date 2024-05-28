import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

const ProfileInfoBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="absolute bottom-5 left-0">
            <Wrapper pt={''} pb={''}>
                {children}
            </Wrapper>
        </div>
    )
}

export default ProfileInfoBlockLayout;