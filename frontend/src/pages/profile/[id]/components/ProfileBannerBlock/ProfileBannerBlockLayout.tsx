import {LayoutProps} from "@/types/LayoutProps";

const ProfileBannerBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="relative overflow-hidden">
            {children}
        </div>
    )
}

export default ProfileBannerBlockLayout;