import {LayoutProps} from "@/types/LayoutProps";

const ProfileListElementLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"text-base flex flex-col gap-y-4"}>
            {children}
        </div>
    )
}

export default ProfileListElementLayout;