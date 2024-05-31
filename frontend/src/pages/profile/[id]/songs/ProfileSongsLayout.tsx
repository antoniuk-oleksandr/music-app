import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper/Wrapper";

const ProfileSongsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <Wrapper pt={'pt-4'} pb={'pb-48'}>
            <div>
                {children}
            </div>
        </Wrapper>
    )
}

export default ProfileSongsLayout;