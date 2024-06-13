type NavbarPlaylistNameProps = {
    name: string,
}

const NavbarPlaylistName = (props: NavbarPlaylistNameProps) => {
    const {name} = props;

    return (
        <span className={"w-fit font-semibold truncate max-w-55.5"}>{name}</span>
    )
}

export default NavbarPlaylistName;