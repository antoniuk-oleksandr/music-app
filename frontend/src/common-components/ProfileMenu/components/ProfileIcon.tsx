type ProfileIconProps = {
    avatarPath: string,
}

const ProfileIcon = (props: ProfileIconProps) => {
    const {avatarPath} = props

    return (
        <img
            className={"size-10 rounded-full"}
            src={avatarPath}
            alt="avatar"
        />
    )
}

export default ProfileIcon;