import {LayoutProps} from "@/types/LayoutProps";
import ProfileDataUploadMenuHeader from "@/pages/profile/[id]/components/ProfileDataUploadMenu/components/ProfileDataUploadMenuHeader/ProfileDataUploadMenuHeader";

const ProfileDataUploadMenuHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex justify-between text-lg px-4 py-4 font-semibold"}>
            {children}
        </div>
    )
}

export default ProfileDataUploadMenuHeaderLayout;