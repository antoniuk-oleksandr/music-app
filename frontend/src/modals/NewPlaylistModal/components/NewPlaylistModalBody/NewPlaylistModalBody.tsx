import NewPlaylistModalBodyLayout from "./NewPlaylistModalBodyLayout";
import Input from "@/common-components/Input/Input";
import Select from "@/common-components/Select/Select";
import {SelectItemType} from "@/types/SelectItemType";
import {useState} from "react";
import {getPlayListPrivacyItems} from "@/modals/NewPlaylistModal/PlaylistPrivacy";
import {useFormContext} from "react-hook-form";

const NewPlaylistModalBody = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const selectItems = getPlayListPrivacyItems();
    const [selectedItem, setSelectedItem] = useState<SelectItemType>(selectItems[0]);

    const {setValue} = useFormContext();

    const setSelectValue = (value: SelectItemType) => {
        setSelectedItem(value);
        setValue('isPublic', value.title === 'Public');
    }

    return (
        <NewPlaylistModalBodyLayout>
            <Input
                id={'name'}
                label={'Playlist name'}
                color={'text-neutral-700'}
                border={'ring-neutral-800'}
                className={"!px-3 !py-2 !text-base"}
            />
            <Select
                items={selectItems}
                isMenuOpened={isMenuOpened}
                setIsMenuOpened={setIsMenuOpened}
                setSelectedItem={setSelectValue}
                selectedItem={selectedItem}
                menuWidth={'w-56'}
            />
        </NewPlaylistModalBodyLayout>
    )
}

export default NewPlaylistModalBody;