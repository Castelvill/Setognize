import ImageResizer from 'react-native-image-resizer';
type ResizeImageType = {
    uri: string,
    width: number,
    height: number
}
export const useResizeImage = async ({uri, width, height} : ResizeImageType) => {
    try {
        const response = await ImageResizer.createResizedImage(uri, width, height, 'JPEG', 100, 0, undefined, true, { mode: "stretch" });
        console.log(response.height, "x", response.width, " img");
        return response.uri;
    } catch (err) {
        console.error(err);
        return null;
    }
};