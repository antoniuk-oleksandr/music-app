import {User} from "@/types/User";
import {Fragment} from "react";
import {useRouter} from "next/navigation";

type UsersListProps = {
    users: User[];
}

const UserList = (props: UsersListProps) => {
    const {users} = props;

    const router = useRouter();

    return (
        <>
            {users.map((user, index) => (
                    <Fragment key={index}>
                        {index === 0 ? null : <span>•</span>}
                        <span
                            onClick={() => router.push(`/users/${user.id}`)}
                            className={"cursor-pointer hover:underline duration-200 ease-out"}
                        >{user.username}</span>
                    </Fragment>
                )
            )}
        </>
    )
}

export default UserList;