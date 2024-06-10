type ImageUploaderPreviewProps = {
    previewUrl: string | null;
}

const ImageUploaderPreview = (props: ImageUploaderPreviewProps) => {
    const {previewUrl} = props;

    return (
        <img
            className={`absolute top-0 left-0 w-full h-full object-cover object-center 
            ${previewUrl ? '' : 'hidden'}`}
            src={previewUrl as string}
            alt="selected image"
        />
    )
}

export default ImageUploaderPreview;