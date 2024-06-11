import {LayoutProps} from "@/types/LayoutProps";

const ProfileMenuButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"size-7 relative"}>
            {children}
        </div>
    )
}

export default ProfileMenuButtonLayout;