type ProfileNamePageProps = {
    username: string,
}

const ProfileUsernameName = (props: ProfileNamePageProps) => {
    const {username } = props;

    return (
        <span className={"text-5xl font-semibold select-text"}>{username}</span>
    )
}

export default ProfileUsernameName;