import {IoEarth, IoLockClosedOutline} from "react-icons/io5";
import {SelectItemType} from "@/types/SelectItemType";

export const getPlayListPrivacyItems = (): SelectItemType[] => {
    return [
        {
            title: "Public",
            text: "Anyone view",
            icon: <IoEarth/>
        },
        {
            title: "Private",
            text: "Only you can view",
            icon: <IoLockClosedOutline/>
        }
    ]
}