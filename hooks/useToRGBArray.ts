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
    // for (let index = 0; index < convertedArray.length; index += 3) {
    //     red.push(convertedArray[index] / 255);
    //     green.push(convertedArray[index + 1] / 255);
    //     blue.push(convertedArray[index + 2] / 255);
    // }
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
    //const finalArray = [...red, ...green, ...blue];
    //console.log(imageArray)
    //console.log(finalArray)
    //convert to Uint8 array buffer (but some models require float32 format)*/
    //const arrayBuffer = new Float32Array(imageArray);
    //return arrayBuffer;
}