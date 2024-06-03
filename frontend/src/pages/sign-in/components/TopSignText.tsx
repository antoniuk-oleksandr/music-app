import {ReactNode} from "react";

type TopSignTextProps = {
    icon: ReactNode,
    firstLineText: string,
    secondLineText?: string,
    thirdLineText?: string,
    iconSize?: string,
}

const TopSignText = (props: TopSignTextProps) => {
    const {icon, firstLineText, secondLineText, thirdLineText, iconSize} = props;

    return (
        <>
            <div className={`${iconSize ? 'text-5xl' : 'text-4xl'} text-red-500 my-2`}>
                {icon}
            </div>
            <div className={"pb-6 flex items-center flex-col"}>
                <h2 className={"text-3xl font-semibold text-neutral-800"}>{firstLineText}</h2>
                {secondLineText !== undefined &&
                    <p className={"text-lg text-neutral-600"}>{secondLineText}</p>
                }
                {thirdLineText !== undefined &&
                    <p className={"text-lg text-neutral-600"}>{thirdLineText}</p>
                }
            </div>
        </>
    )
}

export default TopSignText;