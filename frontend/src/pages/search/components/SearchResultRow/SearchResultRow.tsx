import SearchResultRowLayout from "./SearchResultRowLayout";
import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import SearchResultText from "@/pages/search/components/SearchResultText/SearchResultText";
import {SearchTab} from "@/types/SearchTab";
import ElementIcon from "@/common-components/ElementIcon/ElementIcon";
import {useState} from "react";

type SearchResultProps = {
    item: Song | User | Album | Playlist;
    itemType: SearchTab;
    index: number;
    isPlaying: boolean;
}

const SearchResultRow = (props: SearchResultProps) => {
    const [rowHovered, setRowHovered] = useState(false);
    const {item, itemType, index, isPlaying} = props;

    return (
        <SearchResultRowLayout
            rowHovered={rowHovered}
            setRowHovered={setRowHovered}
            item={item}
            topBorder={index !== 0}
            itemType={itemType}
        >
            <ElementIcon
                size={'size-14'}
                bg={'bg-black-70'}
                isPlaying={isPlaying}
                element={item as Song}
                elementType={itemType}
                rowHovered={rowHovered}
                iconColor={"text-white"}
                roundedFull={[SearchTab.Profiles, SearchTab.Artists].includes(itemType)}
            />
            <SearchResultText itemType={itemType} item={item}/>
        </SearchResultRowLayout>
    )
}

export default SearchResultRow;