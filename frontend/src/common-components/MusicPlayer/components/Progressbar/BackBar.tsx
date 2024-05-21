type BackBarProps = {
    rounded: boolean,
}

const BackBar = (props: BackBarProps) => {
    const {rounded} = props;

    return (
        <div className={`w-full h-1 bg-neutral-200 ${rounded ? 'rounded-full' : ''}`}></div>
    )
}

export default BackBar;