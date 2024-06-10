type ProfileListsImageProps = {
    src: string,
}

const ProfileListsImage = (props: ProfileListsImageProps) => {
    const { src} = props;

    return (
        <img
            className={"object-center object-cover aspect-1 rounded-md size-full"}
            src={src}
            alt="listCover"
        />
    )
}

export default ProfileListsImage;