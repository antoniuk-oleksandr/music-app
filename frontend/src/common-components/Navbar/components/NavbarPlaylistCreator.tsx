import UserLink from "@/common-components/UserLink";
import {User} from "@/types/User";

type NavbarPlaylistCreatorProps = {
    creator: User,
}

const NavbarPlaylistCreator = (props: NavbarPlaylistCreatorProps) => {
    const {creator} = props;

    return (
        <div className={"w-fit"}>
            <UserLink user={creator}/>
        </div>
    )
}

export default NavbarPlaylistCreator;