import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, MutableRefObject, SetStateAction} from "react";

type ProfileMenuItemLayoutProps = LayoutProps & {
    onClick: () => void,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
    itemRef?: MutableRefObject<HTMLDivElement | null>,
}

const ProfileMenuItemLayout = (props: ProfileMenuItemLayoutProps) => {
    const {children, onClick, setIsMenuOpened, itemRef} = props;

    return (
        <div
            ref={itemRef}
            onClick={() => {
                setIsMenuOpened(false);
                onClick();
            }}
            className="w-full text-2xl px-4 py-2 cursor-pointer hover:bg-neutral-100 flex items-center gap-x-4">
            {children}
        </div>
    )
}

export default ProfileMenuItemLayout;