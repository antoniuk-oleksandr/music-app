import {Dispatch, FormEvent, MutableRefObject, SetStateAction} from "react";
import {z} from "zod";

export const handleCodeInput = (
    e: FormEvent<HTMLDivElement>,
    setDigits: Dispatch<SetStateAction<number[]>>,
    currentInputRef: MutableRefObject<HTMLDivElement | null>,
    inputRefs: MutableRefObject<null[] | MutableRefObject<HTMLDivElement | null>[]>,
) => {
    // @ts-ignore
    const symbol = parseInt(e.nativeEvent.data);
    // @ts-ignore
    const value = parseInt(e.nativeEvent.srcElement.textContent);
    const id = parseInt(e.currentTarget.id);

    if (!currentInputRef.current || !inputRefs.current) return;

    if (!z.number().safeParse(symbol).success) {
        currentInputRef.current.textContent = '';
        return;
    }

    if (!z.number().max(9).safeParse(value).success) {
        const text = currentInputRef.current.textContent as string;
        currentInputRef.current.textContent = text.slice(0, text.length - 1);
    }

    setDigits((prev) => {
        prev[id] = symbol;
        return [...prev];
    })

    if (inputRefs.current.length > id + 1) { // @ts-ignore
        inputRefs.current[id + 1].focus()
    }
}

export const handleRefObject = (
    refToSet: HTMLDivElement | null,
    currentInputRef: MutableRefObject<HTMLDivElement | null>,
    inputRefs: MutableRefObject<null[] | MutableRefObject<HTMLDivElement | null>[]>,
    id: number,
) => {
    currentInputRef.current = refToSet;
    // @ts-ignore
    inputRefs.current[id] = refToSet;
}

// export const handleVerifyButtonClick = (
//     digits: number[],
//     dispatch: Dispatch<UnknownAction>,
//     dialogIds: any[],
// ) => {
//     if (digits.some((digit) => digit === null)) {
//         showDialog(
//             dispatch,
//             'Input verification code is incorrect!',
//             'text-red-500',
//             dialogIds
//         );
//
//         setTimeout(() => dispatch(setIsDialogShown(false)), 2000);
//     }
// }