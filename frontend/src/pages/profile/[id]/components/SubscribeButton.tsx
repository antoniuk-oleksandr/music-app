import {Profile} from "@/types/Profile";
import {useDispatch, useSelector} from "react-redux";
import {handleSubscribeButtonClick} from "@/pages/profile/[id]/handlers";

type SubscribeButtonProps = {
    profileData: Profile,
}

const SubscribeButton = (props: SubscribeButtonProps) => {
    const {profileData} = props;
    const {isSubscribed} = profileData;
    const dispatch = useDispatch();
    const tokenInfo = useSelector((state: any) => state.token.tokens);
    const {ids} = useSelector((state: any) => state.dialog);

    if (isSubscribed === null) return null;
    return (
        <button
            onClick={() => handleSubscribeButtonClick(tokenInfo, dispatch, isSubscribed, profileData.user, ids)}
            className={`text-sm font-semibold rounded-[44px] px-8 py-2 bg-transparent border focus:outline-none active:scale-95 duration-200 ease-out
            ${isSubscribed ? 'border-neutral-800 text-neutral-800' : 'border-red-500 text-red-500'}`}
            type={"button"}
        >
            <span>{isSubscribed ? 'Subscribed' : 'Subscribe'}</span>
        </button>
    )
}

export default SubscribeButton;