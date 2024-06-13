import {getYearFromTimestamp} from "@/utils/utils";

type YearElementProps = {
    timestamp: string;
}

const YearElement = (props: YearElementProps) => {
    const {timestamp} = props;

    return (
        <span className={"text-neutral-700"}>{getYearFromTimestamp(timestamp)}</span>
    )
}

export default YearElement;