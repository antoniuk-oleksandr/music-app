import {User} from "@/types/User";
import {Fragment} from "react";
import UserLink from "@/common-components/UserLink";
import {getUserListSeparator} from "@/utils/utils";

type UsersListProps = {
    users: User[];
    specialSeparator?: boolean;
}

const UserList = (props: UsersListProps) => {
    const {users, specialSeparator} = props;

    return (
        <>
            {users.map((user, index) => (
                    <Fragment key={index}>
                        {index === 0 ? null :
                            <span>{getUserListSeparator(specialSeparator, index, users.length)}</span>
                        }
                        <UserLink user={user}/>
                    </Fragment>
                )
            )}
        </>
    )
}

export default UserList;