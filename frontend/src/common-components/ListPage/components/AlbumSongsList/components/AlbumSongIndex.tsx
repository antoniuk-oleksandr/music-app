type AlbumSongIndexProps = {
    index: number
}

const AlbumSongIndex = (props: AlbumSongIndexProps) => {
    const {index} = props

    return (
        <div className={"grid place-items-center size-9 text-base text-neutral-700"}>
            <span>{index + 1}</span>
        </div>
    )
}

export default AlbumSongIndex;