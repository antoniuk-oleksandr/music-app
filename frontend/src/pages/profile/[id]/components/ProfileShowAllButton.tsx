type ProfileShowAllButtonProps = {
    action: () => void,
}

const ProfileShowAllButton = (props: ProfileShowAllButtonProps) => {
    const {action} = props;

    return (
        <button
            onClick={action}
            type={"button"}
            className={"cursor-pointer mt-1 w-fit px-4 py-2 rounded-full cur text-sm bg-white font-semibold hover:bg-neutral-200 duration-200 ease-out active:scale-95"}
        >Show All</button>
    )
}

export default ProfileShowAllButton;