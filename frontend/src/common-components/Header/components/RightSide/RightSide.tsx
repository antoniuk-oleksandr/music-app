import RightSideLayout from "./RightSideLayout";
import {useRouter} from "next/router";

const RightSide = () => {
    const router = useRouter();

    return (
        <RightSideLayout>
            <button
            onClick={() => router.push("/sign-in")}
            >Sign in</button>
        </RightSideLayout>
    )
}

export default RightSide;