import ProfileDataUploadMenuHeaderLayout from "./ProfileDataUploadMenuHeaderLayout";
import {IoClose} from "react-icons/io5";

const ProfileDataUploadMenuHeader = () => {
    return (
        <ProfileDataUploadMenuHeaderLayout>
            <p>Select An Image</p>
            <IoClose
                className="text-2xl cursor-pointer"
                onClick={() => console.log("click")}
            />
        </ProfileDataUploadMenuHeaderLayout>
    )
}

export default ProfileDataUploadMenuHeader;