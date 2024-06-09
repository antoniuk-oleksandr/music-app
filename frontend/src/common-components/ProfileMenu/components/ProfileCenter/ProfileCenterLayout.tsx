import {LayoutProps} from "@/types/LayoutProps";

const ProfileBottomLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"py-2"}>
            {children}
        </div>
    )
}

export default ProfileBottomLayout;