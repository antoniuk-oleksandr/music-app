
type AddToPlaylistModalPlaylistProps = {
    imagePath: string;
};

const AddToPlaylistModalPlaylistImage = (props: AddToPlaylistModalPlaylistProps) => {
    const {imagePath} = props;

    return (
        <img
            className={"size-11 rounded"}
            src={imagePath}
            alt=""
        />
    )
}

export default AddToPlaylistModalPlaylistImage;