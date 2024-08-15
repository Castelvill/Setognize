import SafeAreaViewUpgraded from './components/SafeAreaViewUpgraded';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { useTensorflowModel } from 'react-native-fast-tflite';
import { useResizeImage } from './hooks/useResizeImage';
import { useToRGBArray } from './hooks/useToRGBArray';
import { useCreateTop5Ids } from './hooks/useCreateTop5Ids';
import ImagePicker from 'react-native-image-crop-picker';


export default function HomeScreen() {
  const [image, setImage] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const [top5sets, setTop5sets] = useState<string[] | null>(null);
  const [top5images, setTop5images] = useState<string[] | null>(null);
  const plugin = useTensorflowModel(require('./model/model.tflite'))

  const recognizeImage = async () =>{
    if(!image){
      console.log("There's no image to recognize.")
      return
    }
    setProcessing(true)
    setTop5sets([])
    console.log("Processing model...")
    const imageSize = 224
    const resized = await useResizeImage({uri: image, width: imageSize, height: imageSize})
    const arrayBuffer = await useToRGBArray({uri: resized!, width: imageSize, height: imageSize})
    //console.log(arrayBuffer!)

    var startTime = performance.now()
    const outputData = plugin.model!.runSync([arrayBuffer])
    var endTime = performance.now()
    console.log("Prediction time: " + ((endTime - startTime)/1000).toFixed(2) + "s")
    
    setProcessing(false)

    const predictionArray = outputData![0]
    const predictedSets = await useCreateTop5Ids(predictionArray as Float32Array)
    setTop5sets(predictedSets.text)
    setTop5images(predictedSets.images)
    //console.log("Prediction ready.")
  };

  const pickImage = async () => {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
      freeStyleCropEnabled: true
    }).then(image => {
      setImage(image.path);
    }).catch(error =>{ console.log("error in catch block", error.code) 
      if (error.code === 'E_PICKER_CANCELLED') { return false; }
    });
  };

  return (
    <SafeAreaViewUpgraded style={styles.mainStyle}>
      <View style={{flexDirection: "row", justifyContent: 'space-evenly'}}>
        <TouchableOpacity onPress={pickImage} style={styles.button} activeOpacity={0.6}>
          <Text style={styles.buttonText}>Wybierz zdjęcie</Text>
        </TouchableOpacity>
        {image && <TouchableOpacity onPress={recognizeImage} style={styles.button} activeOpacity={0.6}>
          <Text style={styles.buttonText}>Rozpoznaj zestaw</Text>
        </TouchableOpacity>}
        {!image && <TouchableOpacity style={styles.disableButton} activeOpacity={0.6}>
          <Text style={styles.disabledButtonText}>Rozpoznaj zestaw</Text>
        </TouchableOpacity>}
      </View>
      
      {image && <Image source={{ uri: image }} resizeMode = 'contain' style={styles.imageStyle}/>}
      {!image && 
        <View style={styles.altImageStyle}>
          <Text style={styles.altTextStyle}>Wybierz zdjęcie z galerii</Text>
        </View>
      } 

      {processing && (
        <View style = {{padding: 20, flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={100} />
        </View>
      )}
      {top5sets && top5sets.length > 0 && top5images && top5images.length > 0 && (
        <ScrollView style={styles.top5Container}>
          {top5sets.map((name, index) => (
            <View style={styles.top5element} key={index}>
              <Image source={{uri:top5images[index]}} resizeMode = 'contain' style={styles.top5image}/>
              <View style={styles.top5TextContain}>
                <Text  style={styles.top5Text}>{name}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaViewUpgraded>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#000000"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    marginTop: 0,
  },
  disableButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#c5c5c5',
    borderColor: '#c5c5c5',
    marginTop: 0,
  },
  buttonText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#1c1c1c',
  },
  disabledButtonText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#e7e7e7',
  },
  imageStyle: {
    width: "100%",
    height: "40%",
    marginTop: 20,
    backgroundColor: '#1e1e1e',
  },
  altImageStyle: {
    width: "100%",
    height: "40%",
    marginTop: 20,
    backgroundColor: '#1e1e1e',
    justifyContent: "center",
  },
  altTextStyle: {
    fontSize: 28,
    //lineHeight: 24,
    fontWeight: '600',
    color: '#cbcbcb',
    textAlign: 'center',
  },
  top5Container: {
    margin: 10,
    marginTop: 15
  },
  top5element: {
    flexDirection: "row",
    marginBottom: 10
  },
  top5TextContain: {
    flex: 1,
    maxWidth: '100%',
    justifyContent: 'space-evenly',
  },
  top5Text: {
    color: 'white',
    fontSize: 16
  },
  top5image: {
    width: 70,
    height: 70,
    marginRight: 10,
    //borderRadius: 10,
  },
})