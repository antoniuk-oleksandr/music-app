import {fileRequest} from "@/api/file-request";

export const capitalize = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const getUrlFromString = async (url: string, type: string) => {
    const response = await fileRequest(url);
    const imageBlob = new Blob([response as BlobPart], {type});
    return URL.createObjectURL(imageBlob);
}

export const getYearFromTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);

    return date.getFullYear();
}