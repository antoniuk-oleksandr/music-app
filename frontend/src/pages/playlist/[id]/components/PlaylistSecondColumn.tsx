import UserList from "@/common-components/UserList";
import {Song} from "@/types/Song";

type PlaylistSecondColumnProps = {
    song: Song,
}

const PlaylistSecondColumn = (props: PlaylistSecondColumnProps) => {
    const {song} = props;

    return (
        <div>
            <UserList specialSeparator={true} users={song.users}/>
        </div>
    )
}

export default PlaylistSecondColumn;