import PlaylistFirstColumnLayout from "./PlaylistFirstColumnLayout";
import ElementIcon from "@/common-components/ElementIcon/ElementIcon";
import {Song} from "@/types/Song";
import {SearchTab} from "@/types/SearchTab";

type PlaylistFirstColumnProps = {
    song: Song,
    isHovered: boolean,
    isPlaying: boolean,
}

const PlaylistFirstColumn = (props: PlaylistFirstColumnProps) => {
    const {song, isHovered, isPlaying} = props;

    return (
        <PlaylistFirstColumnLayout>
            <ElementIcon
                isPlaying={isPlaying}
                element={song}
                size={'size-8'}
                bg={'bg-black-70'}
                roundedFull={false}
                rowHovered={isHovered}
                iconColor={"text-white"}
                elementType={SearchTab.Songs}
            />
            <span className={"text-base font-semibold select-text"}>{song.name}</span>
        </PlaylistFirstColumnLayout>
    )
}

export default PlaylistFirstColumn;