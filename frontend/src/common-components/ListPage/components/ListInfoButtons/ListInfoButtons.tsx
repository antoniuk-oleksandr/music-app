import ListInfoButtonsLayout from "@/common-components/ListPage/components/ListInfoButtons/ListInfoButtonsLayout";
import ListPlayButton from "@/common-components/ListPage/components/ListPlayButton";
import ListSecondButton from "@/common-components/ListPage/components/ListSecondButton";
import {BiAddToQueue} from "react-icons/bi";
import ListOptionsButton from "@/common-components/ListPage/components/ListOptionsButton";

const ListInfoButtons = () => {
    return (
        <ListInfoButtonsLayout>
            <ListPlayButton/>
            <ListSecondButton
                icon={<BiAddToQueue/>}
                text={'Save to library'}
                action={() => console.log("click")}
            />
            <ListOptionsButton/>
        </ListInfoButtonsLayout>
    )
}

export default ListInfoButtons;