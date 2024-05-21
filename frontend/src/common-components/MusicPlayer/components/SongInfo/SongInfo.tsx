import SongInfoLayout from "./SongInfoLayout";
import Image from "next/image"
import {IoHeartOutline} from "react-icons/io5";

const SongInfo = () => {
    return (
        <SongInfoLayout>
            <Image
                className="rounded-md"
                width={48}
                height={48}
                src={"/eminem.webp"}
                alt={"cover"}/>
            <div className="flex flex-col px-1 h-full justify-center">
                <span className={"text-lg font-semibold select-text"}>Song Name</span>
                <span className={"text-sm select-text hover:underline cursor-pointer w-fit ease-out duration-200"}>Artist</span>
            </div>
            <IoHeartOutline className="text-2xl cursor-pointer font-semibold ml-4"/>
        </SongInfoLayout>
    )
}

export default SongInfo;