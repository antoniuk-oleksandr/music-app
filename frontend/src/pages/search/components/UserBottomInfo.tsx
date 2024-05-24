import {User} from "@/types/User";
import {SearchTab} from "@/types/SearchTab";

type UserBottomInfoProps = {
    user: User;
    type: SearchTab;
}

const UserBottomInfo = (props: UserBottomInfoProps) => {
    const {user, type} = props;

    return (
        <>
            <span>{type.slice(0, type.length - 1)}</span>
        </>
    )
}

export default UserBottomInfo;