import {User} from "@/types/User";
import {useRouter} from "next/router";
import {Album} from "@/types/Album";

type AlbumLinkProps = {
    album: Album;
}

const AlbumLink = (props: AlbumLinkProps) => {
    const {album} = props;
    const router = useRouter();

    if (!album) return <div></div>;
    return (
        <span
            onClick={() => router.push(`/album/${album.id}`)}
            className={"select-text cursor-pointer hover:underline duration-200 ease-out"}
        >{album.name}</span>
    )
}

export default AlbumLink;