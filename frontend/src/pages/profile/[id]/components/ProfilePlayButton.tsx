import {Song} from "@/types/Song";

type ProfilePlayButtonProps = {
    songs: Song[],
}

const ProfilePlayButton = (props: ProfilePlayButtonProps) => {
    const { songs } = props;

    return (
        <button
            className={"text-base font-semibold rounded-[44px] px-8 py-2 bg-white hover:bg-neutral-200 focus:outline-none active:scale-95 duration-200 ease-out"}
            type="button"
        >
            <span className={""}>Play</span>
        </button>
    )
}

export default ProfilePlayButton;