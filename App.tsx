import SafeAreaViewUpgraded from './components/SafeAreaViewUpgraded';
import {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import { useTensorflowModel } from 'react-native-fast-tflite';
import {launchImageLibrary} from 'react-native-image-picker';
import { useResizeImage } from './hooks/useResizeImage';
import { useToRGBArray } from './hooks/useToRGBArray';

export default function HomeScreen() {
  const [image, setImage] = useState<string>("");
  const [top5sets, setTop5sets] = useState<string[] | null>(null);
  const plugin = useTensorflowModel(require('./model/model.tflite'))

  const recognizeImage = async () =>{
    if(!image){
      console.log("There's no image to recognize.")
      return
    }
    setTop5sets(["Processing..."])
    const resized = await useResizeImage({uri: image, width: 96, height: 96})
    const arrayBuffer = await useToRGBArray(resized!)
    const outputData = await plugin.model?.run([arrayBuffer])
    console.log(outputData)
    //setTop5sets(await getPredictions(image))
    console.log("Prediction ready.")
  };

  const pickImage = async () => {
    const result = await launchImageLibrary({mediaType: "photo"});

     if (result !== undefined && result.assets !== undefined && result.assets.length > 0) {
       setImage(result.assets[0].uri!);
     }
  };

  return (
    <SafeAreaViewUpgraded style={styles.mainStyle}>
    {/* <Text className="color-green-700">aaaaa</Text> */}
      {image && <Image source={{ uri: image }} resizeMode = 'contain' style={styles.imageStyle}/>}
    <Button title="Pick an image from the galery" onPress={pickImage} />
    <Button title="Recognize Set" onPress={recognizeImage}/>
    {top5sets && top5sets.length > 0 && (
        <View style={styles.top5Container}>
          {top5sets.map((name, index) => (
            <Text key={index} style={styles.top5Text}>{name}</Text>
          ))}
        </View>
      )}
    </SafeAreaViewUpgraded>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: "50%"
  },
  mainStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink"
  },
  top5Container: {
    marginTop: 20
  },
  top5Text: {
    color: 'black',
    fontSize: 16
  }
})