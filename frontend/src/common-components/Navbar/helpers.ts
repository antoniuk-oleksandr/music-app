export const formatPath = (path: string) => {
    if (path === "/") return path;
    return "/" + path.split("/")[1];
}