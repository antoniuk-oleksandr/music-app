import {LayoutProps} from "@/types/LayoutProps";

const ProfileListsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"grid grid-cols-6 gap-x-6 grid-rows-1"}>
            {children}
        </div>
    )
}

export default ProfileListsLayout;