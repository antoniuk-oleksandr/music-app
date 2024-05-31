import {SearchTab} from "@/types/SearchTab";

type ProfileListsHeaderProps = {
    type: SearchTab,
}

const ProfileListsHeader = (props: ProfileListsHeaderProps) => {
    const {type} = props;

    return (
        <h2 className={"text-5xl font-semibold mb-4"}>{type}</h2>
    )
}

export default ProfileListsHeader;