type TopLineProps = {
    percentage: number,
    rounded: boolean,
}

const TopBar = (props: TopLineProps) => {
    const {percentage, rounded} = props;

    return (
        <div
            style={{width: `${percentage}%`}}
            className={`h-1 bg-red-500 absolute top-0 ${rounded ? 'rounded-l-full' : ''}`}
        ></div>
    )
}

export default TopBar;