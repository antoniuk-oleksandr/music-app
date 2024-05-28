import BannerLayout from "./BannerLayout";
import {Profile} from "@/types/Profile";

type BannerProps = {
    profileData: Profile,
}

const Banner = (props: BannerProps) => {
    const { profileData } = props;

    return (
        <BannerLayout>
            <img
                draggable={false}
                className={"object-center object-cover"}
                src={profileData.user.bannerPath}
                alt="banner"
            />
        </BannerLayout>
    )
}

export default Banner;