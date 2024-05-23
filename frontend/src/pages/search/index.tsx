import SearchLayout from "./SearchLayout";
import {useRouter} from "next/router";
import {handleSongClick} from "@/pages/search/handlers";
import {useAudio} from "@/utils/AudioContext";
import {useDispatch} from "react-redux";

const SearchPage = () => {
    // const router = useRouter();
    // const query = router.query.q;
    const audioElement = useAudio();

    const dispatch = useDispatch();

    return (
        <SearchLayout>
            <button onClick={() => handleSongClick(audioElement, dispatch)}
            >Lil Uzi Vert
            </button>
        </SearchLayout>
    )
}

export default SearchPage;