import {LayoutProps} from "@/types/LayoutProps";

const ProfileUserDataLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col gap-y-8"}>
            {children}
        </div>
    )
}

export default ProfileUserDataLayout;