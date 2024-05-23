export type Song = {
    name: string,
    duration: number,
    releaseDate: Date,
    songURL: string | BlobPart,
    src: null | string | BlobPart,
}