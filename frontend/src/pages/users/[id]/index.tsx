import {useUserId} from "./use-user-id";
import UserPageLayout from "@/pages/users/[id]/UserPageLayout";

const UsersPage = () => {
    const userId = useUserId();

    if (!userId) return null;
    return (
        <UserPageLayout>
            <span>{userId}</span>
        </UserPageLayout>
    )
}

export default UsersPage;