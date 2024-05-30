import {LayoutProps} from "@/types/LayoutProps";

const ProfileListsPlayButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <button className={"size-10 bg-black-70 active:scale-95 hover:opacity-50 duration-200 ease-out focus:1outline-0 rounded-full grid place-items-center m-2"}>
            {children}
        </button>
    )
}

export default ProfileListsPlayButtonLayout;