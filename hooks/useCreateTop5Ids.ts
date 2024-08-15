import { Image } from "react-native";

const setIDs : string[] = [
    "42154", "75345", "21338", "10325", "31143", "42151", 
    "75349", "10318", "75354", "10321", "31139", "43222", 
    "21341", "10314", "10320", "75352", "75353", "75356", 
    "31136", "76414", "71461", "75357", "76417", "21060", 
    "76419", "10312", "10317", "75348", "42158", "42153", 
    "42156", "75346", "60366", "42148", "31142", "31134", 
    "21340", "21342", "10316", "21344", "21244", "75347", 
    "10315", "43217", "40649", "75367", "21343", "43230", 
    "10313", "75355"
]

const allSets: { [key: string]: string } = {
    "42154": "2022 ford gt",
    "75345": "501st clone troopers battle pack",
    "21338": "a frame cabin",
    "10325": "alpine lodge",
    "31143": "birdhouse",
    "42151": "bugatti bolide",
    "75349": "captain rex helmet",
    "10318": "concorde",
    "75354": "coruscant guard gunship",
    "10321": "corvette",
    "31139": "cozy house",
    "43222": "disney castle",
    "21341": "disney hocus pocus the sanderson sisters cottage",
    "10314": "dried flower centrepiece",
    "10320": "eldorado fortress",
    "75352": "emperor s throne room diorama",
    "75353": "endor speeder chase diorama",
    "75356": "executor super star destroyer",
    "31136": "exotic parrot",
    "76414": "expecto patronum",
    "71461": "fantastical tree house",
    "75357": "ghost phantom ii",
    "76417": "gringotts wizarding bank collectors edition",
    "21060": "himeji castle",
    "76419": "hogwarts castle and grounds",
    "10312": "jazz club",
    "10317": "land rover classic defender 90",
    "75348": "mandalorian fang fighter vs tie interceptor",
    "42158": "nasa mars rover perseverance",
    "42153": "nascar next gen chevrolet camaro zl1",
    "42156": "peugeot 9x8 24h le mans hybrid hypercar",
    "75346": "pirate snub fighter",
    "60366": "ski and climbing center",
    "42148": "snow groomer",
    "31142": "space roller coaster",
    "31134": "space shuttle",
    "21340": "tales of the space age",
    "21342": "the insect collection",
    "10316": "the lord of the rings rivendell",
    "21344": "the orient express train",
    "21244": "the sword outpost",
    "75347": "tie bomber",
    "10315": "tranquil garden",
    "43217": "up house",
    "40649": "up scaled lego minifigure",
    "75367": "venator class republic attack cruiser",
    "21343": "viking village",
    "43230": "walt disney tribute camera",
    "10313": "wildflower bouquet",
    "75355": "x wing starfighter"
  }

const setImagePaths: { [key: string]: any } = {
    "42154": require('../assets/lego_sets/42154.png'),
    "75345": require('../assets/lego_sets/75345.png'),
    "21338": require('../assets/lego_sets/21338.png'),
    "10325": require('../assets/lego_sets/10325.png'),
    "31143": require('../assets/lego_sets/31143.png'),
    "42151": require('../assets/lego_sets/42151.png'),
    "75349": require('../assets/lego_sets/75349.png'),
    "10318": require('../assets/lego_sets/10318.png'),
    "75354": require('../assets/lego_sets/75354.png'),
    "10321": require('../assets/lego_sets/10321.png'),
    "31139": require('../assets/lego_sets/31139.png'),
    "43222": require('../assets/lego_sets/43222.png'),
    "21341": require('../assets/lego_sets/21341.png'),
    "10314": require('../assets/lego_sets/10314.png'),
    "10320": require('../assets/lego_sets/10320.png'),
    "75352": require('../assets/lego_sets/75352.png'),
    "75353": require('../assets/lego_sets/75353.png'),
    "75356": require('../assets/lego_sets/75356.png'),
    "31136": require('../assets/lego_sets/31136.png'),
    "76414": require('../assets/lego_sets/76414.png'),
    "71461": require('../assets/lego_sets/71461.png'),
    "75357": require('../assets/lego_sets/75357.png'),
    "76417": require('../assets/lego_sets/76417.png'),
    "21060": require('../assets/lego_sets/21060.png'),
    "76419": require('../assets/lego_sets/76419.png'),
    "10312": require('../assets/lego_sets/10312.png'),
    "10317": require('../assets/lego_sets/10317.png'),
    "75348": require('../assets/lego_sets/75348.png'),
    "42158": require('../assets/lego_sets/42158.png'),
    "42153": require('../assets/lego_sets/42153.png'),
    "42156": require('../assets/lego_sets/42156.png'),
    "75346": require('../assets/lego_sets/75346.png'),
    "60366": require('../assets/lego_sets/60366.png'),
    "42148": require('../assets/lego_sets/42148.png'),
    "31142": require('../assets/lego_sets/31142.png'),
    "31134": require('../assets/lego_sets/31134.png'),
    "21340": require('../assets/lego_sets/21340.png'),
    "21342": require('../assets/lego_sets/21342.png'),
    "10316": require('../assets/lego_sets/10316.png'),
    "21344": require('../assets/lego_sets/21344.png'),
    "21244": require('../assets/lego_sets/21244.png'),
    "75347": require('../assets/lego_sets/75347.png'),
    "10315": require('../assets/lego_sets/10315.png'),
    "43217": require('../assets/lego_sets/43217.png'),
    "40649": require('../assets/lego_sets/40649.png'),
    "75367": require('../assets/lego_sets/75367.png'),
    "21343": require('../assets/lego_sets/21343.png'),
    "43230": require('../assets/lego_sets/43230.png'),
    "10313": require('../assets/lego_sets/10313.png'),
    "75355": require('../assets/lego_sets/75355.png'),
};

export const useCreateTop5Ids = async (predictionArray: Float32Array): Promise<{text: string[], images: string[]}> =>{
    // Create an array of indices [0, 1, 2, ..., n-1]
    const indices = Array.from(predictionArray.keys());

    // Sort the indices based on the values in predictionArray in descending order
    indices.sort((a, b) => predictionArray[b] - predictionArray[a]);

    // Return the top 5 indices
    const top5indices = indices.slice(0, 5);

    const top5indicesCut = top5indices.filter(index => predictionArray[index]*100 >= 1)

    const images = top5indicesCut.map(index => Image.resolveAssetSource(setImagePaths[setIDs[index]]).uri)

    return {
        text: top5indicesCut.map(
            index => "ID: " + setIDs[index] + "\nNazwa: " + allSets[setIDs[index]]
            + "\nPewność: " + (predictionArray[index]*100).toFixed(0).toString() + "%"
        ),
        images: images
    };
}