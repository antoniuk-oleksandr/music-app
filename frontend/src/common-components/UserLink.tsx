import {User} from "@/types/User";
import {useRouter} from "next/router";

type UserLinkProps = {
    user: User;
}

const UserLink = (props: UserLinkProps) => {
    const {user} = props;
    const router = useRouter();

    return (
        <span
            onClick={() => router.push(`/profile/${user.id}`)}
            className={"select-text cursor-pointer hover:underline duration-200 ease-out"}
        >{user.username}</span>
    )
}

export default UserLink;