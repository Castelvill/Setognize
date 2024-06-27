import SafeAreaViewUpgraded from './components/SafeAreaViewUpgraded';
import {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [top5sets, setTop5sets] = useState<string[] | null>(null);

  const recognizeImage = async () =>{
    if(!image){
      console.log("There's no image to recognize.")
      return
    }
    setTop5sets(["Processing..."])
    //setTop5sets(await getPredictions(image))
    console.log("Prediction ready.")
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   //aspect: [1, 1],
    //   quality: 1,
    // });

    //console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
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