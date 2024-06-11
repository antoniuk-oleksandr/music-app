import {LayoutProps} from "@/types/LayoutProps";

const ProfileBottomLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full py-2 border-t border-neutral-200"}>
            {children}
        </div>
    )
}

export default ProfileBottomLayout;