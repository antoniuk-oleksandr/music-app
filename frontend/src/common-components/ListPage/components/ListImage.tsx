type ListImageProps = {
    imageSrc: string;
}

const ListImage = (props: ListImageProps) => {
    const {imageSrc} = props;

    return (
        <img
            className={"size-60 object-center object-cover rounded"}
            src={imageSrc}
            alt="image"
        />
    )
}

export default ListImage;