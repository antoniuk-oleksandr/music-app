import ListOfPlaylistsLayout from "./ListOfPlaylistsLayout";
import {useSelector} from "react-redux";
import NavbarPlaylistItem from "@/common-components/Navbar/components/NavbarPlaylistItem/NavbarPlaylistItem";
import {Playlist} from "@/types/Playlist";
import {useNavbarPlaylists} from "@/common-components/Navbar/use-effects/use-navbar-playlists";

const ListOfPlaylists = () => {
    const playlistsData: Playlist[] | null = useSelector((state: any) => state.userProfile.playlists);
    const {playlists} = useNavbarPlaylists(playlistsData);

    return (
        <ListOfPlaylistsLayout>
            {playlists.map((playlist, index) => (
                <NavbarPlaylistItem {...playlist} key={index}/>
            ))}
        </ListOfPlaylistsLayout>
    )
}

export default ListOfPlaylists;