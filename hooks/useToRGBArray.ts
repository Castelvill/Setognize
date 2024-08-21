import { convertToRGB } from "react-native-image-to-rgb";
type RGBImageType = {
    uri: string,
    width: number,
    height: number
}
export const useToRGBArray = async ({uri, width, height} : RGBImageType) =>{
    const convertedArray = await convertToRGB(uri);
    let red = []
    let blue = []
    let green = []
    for (let index = 0; index < convertedArray.length; index += 3) {
        red.push(convertedArray[index]);
        green.push(convertedArray[index + 1]);
        blue.push(convertedArray[index + 2]);
    }
    const imageSize = width * height;
    const floatArray = new Float32Array(imageSize * 3);
    for (let i = 0; i < imageSize; i++) {
        floatArray[i * 3] = red[i];
        floatArray[i * 3 + 1] = green[i];
        floatArray[i * 3 + 2] = blue[i];
    }
    return floatArray
}