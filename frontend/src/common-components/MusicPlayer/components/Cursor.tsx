import {AnimatePresence, motion} from "framer-motion";

type CursorProps = {
    isShown: boolean,
    percentage: number
}

const Cursor = (props: CursorProps) => {
    const {isShown, percentage} = props;

    return (
        <AnimatePresence>
            {isShown &&
                <motion.div
                    style={{left:`calc(${percentage}% - 0.375rem)`}}
                    className={"w-3 h-3 rounded-full bg-red-500 absolute -top-1"}></motion.div>
            }
        </AnimatePresence>
    )
}

export default Cursor;