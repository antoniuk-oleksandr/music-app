import {Profile} from "@/types/Profile";

type SubscribeButtonProps = {
    profileData: Profile,
}

const SubscribeButton = (props: SubscribeButtonProps) => {
    const {profileData} = props;
    const isSubscribed = false;

    return (
        <button className={`text-sm font-semibold rounded-[44px] px-8 py-2 bg-transparent border focus:outline-none active:scale-95 duration-200 ease-out
                ${isSubscribed ? 'border-white' : 'border-red-500 text-red-500'}`}
                type={"button"}
        >
            <span>{isSubscribed ? 'Subscribed' : 'Subscribe'}</span>
        </button>
    )
}

export default SubscribeButton;