import {LayoutProps} from "@/types/LayoutProps";

const EditProfileButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="relative">
            {children}
        </div>
    )
}

export default EditProfileButtonLayout;