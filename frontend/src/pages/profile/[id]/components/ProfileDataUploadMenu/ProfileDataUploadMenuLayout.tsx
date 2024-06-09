import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, MutableRefObject, SetStateAction} from "react";

type EditProfileMenuLayoutProps = LayoutProps & {
    isOpened: boolean,
    menuRef: MutableRefObject<HTMLDivElement | null>,
    setIsOpened: Dispatch<SetStateAction<boolean>>,
}

const ProfileDataUploadMenuLayout = (props: EditProfileMenuLayoutProps) => {
    const {children, menuRef, setIsOpened, isOpened} = props;

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 w-full h-svh bg-neutral-800 bg-opacity-50 z-50 grid place-items-center">
            <div className={"w-fit bg-white h-fit rounded-xl flex flex-col"}>
                {children}
            </div>
        </div>
    )
}

export default ProfileDataUploadMenuLayout;