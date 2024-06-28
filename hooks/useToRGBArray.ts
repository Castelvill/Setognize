import { convertToRGB } from "react-native-image-to-rgb";

export const useToRGBArray = async (uri: string) =>{
    const convertedArray = await convertToRGB(uri);
    let red = []
    let blue = []
    let green = []
    for (let index = 0; index < convertedArray.length; index += 3) {
        red.push(convertedArray[index] / 255);
        green.push(convertedArray[index + 1] / 255);
        blue.push(convertedArray[index + 2] / 255);
    }
    const floatArray = new Float32Array(128 * 128 * 3);
    for (let i = 0; i < 128 * 128; i++) {
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