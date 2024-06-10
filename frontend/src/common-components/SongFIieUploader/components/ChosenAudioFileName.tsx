type ChosenAudioFileName = {
    fileName: string | null,
}

const ChosenAudioFileName = (props: ChosenAudioFileName) => {
    const {fileName} = props;

    if (!fileName) return null;
    return (
        <div className="max-w-full overflow-hidden">
            <span className="ml-2 truncate block">{fileName}</span>
        </div>
    )
}

export default ChosenAudioFileName;