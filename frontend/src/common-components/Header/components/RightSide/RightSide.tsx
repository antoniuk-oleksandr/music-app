import RightSideLayout from "./RightSideLayout";
import {useRouter} from "next/router";
import LightButton from "@/common-components/LightButton";
import {useSelector} from "react-redux";
import {TokensStatus} from "@/types/TokensStatus";
import ProfileMenuButton from "@/common-components/ProfileMenuButton/ProfileMenuButton";

const RightSide = () => {
    const router = useRouter();
    const tokens: TokensStatus = useSelector((state: any) => state.token);

    if (tokens.signedIn === null) return null;
    return (
        <RightSideLayout>
            {tokens.signedIn ?
                <ProfileMenuButton/>
                : <LightButton
                    onClick={() => router.push("/sign-in")}
                >Sign In</LightButton>
            }

        </RightSideLayout>
    )
}

export default RightSide;