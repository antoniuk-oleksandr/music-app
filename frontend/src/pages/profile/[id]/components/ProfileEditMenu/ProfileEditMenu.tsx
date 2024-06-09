import ProfileEditMenuLayout from "./ProfileEditMenuLayout";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import ProfileMenuItem from "@/common-components/ProfileMenu/components/ProfileMenuItem/ProfileMenuItem";
import {SetRef} from "@/types/SetRef";

type ProfileEditMenuProps = {
    isOpened: boolean,
    menuRef: MutableRefObject<HTMLDivElement | null>,
    setIsOpened: Dispatch<SetStateAction<boolean>>,
    setRefs: MutableRefObject<SetRef>[],
}

const ProfileEditMenu = (props: ProfileEditMenuProps) => {
    const {setIsOpened, setRefs} = props;

    return (
        <ProfileEditMenuLayout {...props}>
            <ProfileMenuItem
                icon={null}
                text={'Edit avatar'}
                setIsMenuOpened={setIsOpened}
                onClick={() => setRefs[0].current && setRefs[0].current(true)}
            />
            <ProfileMenuItem
                setIsMenuOpened={setIsOpened}
                icon={null}
                text={'Edit banner'}
                onClick={() => setRefs[1].current && setRefs[1].current(true)}
            />
        </ProfileEditMenuLayout>
    )
}

export default ProfileEditMenu;