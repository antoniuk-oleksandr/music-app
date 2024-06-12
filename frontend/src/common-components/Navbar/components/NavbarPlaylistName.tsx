type NavbarPlaylistNameProps = {
    name: string,
}

const NavbarPlaylistName = (props: NavbarPlaylistNameProps) => {
    const {name} = props;

    return (
        <span className={"w-fit font-semibold"}>{name}</span>
    )
}

export default NavbarPlaylistName;