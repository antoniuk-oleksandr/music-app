import {LayoutProps} from "@/types/LayoutProps";

const ProfileTopLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-4 p-4 items-center font-semibold text-base border-b border-b-neutral-200"}>
            {children}
        </div>
    )
}

export default ProfileTopLayout;