import ProfileBottomLayout from "./ProfileBottomLayout";
import {User} from "@/types/User";
import ProfileMenuItem from "@/common-components/ProfileMenu/components/ProfileMenuItem/ProfileMenuItem";
import {IoCloudUploadOutline} from "react-icons/io5";
import {Dispatch, MutableRefObject, SetStateAction, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";

type ProfileBottomProps = {
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const ProfileBottom = (props: ProfileBottomProps) => {
    const {setIsMenuOpened} = props;
    const dispatch = useDispatch();

    return (
        <ProfileBottomLayout>
            <ProfileMenuItem
                setIsMenuOpened={setIsMenuOpened}
                icon={<IoCloudUploadOutline/>}
                text={'Upload music'}
                onClick={() => dispatch(setIsModalOpened({modalName: 'addMusic', isOpened: true}))}
            />
        </ProfileBottomLayout>
    )
}

export default ProfileBottom;