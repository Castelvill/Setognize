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
    const finalArray = [...red, ...green, ...blue];
    //convert to Uint8 array buffer (but some models require float32 format)
    return new Uint8Array(finalArray);
}