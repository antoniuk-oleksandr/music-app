import {LayoutProps} from "@/types/LayoutProps";

const ProfileListPageListsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"grid grid-cols-9 gap-x-6 gap-y-10"}>
            {children}
        </div>
    )
}

export default ProfileListPageListsLayout;