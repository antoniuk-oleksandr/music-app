import {User} from "@/types/User";
import {Fragment} from "react";
import UserLink from "@/common-components/UserLink";

type UsersListProps = {
    users: User[];
}

const UserList = (props: UsersListProps) => {
    const {users} = props;

    return (
        <>
            {users.map((user, index) => (
                    <Fragment key={index}>
                        {index === 0 ? null : <span>•</span>}
                        <UserLink user={user}/>
                    </Fragment>
                )
            )}
        </>
    )
}

export default UserList;