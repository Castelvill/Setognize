import { Image } from "react-native";

const allSets : string[] = ['2022-ford-gt-42154',
    '501st-clone-troopers-battle-pack-75345',
    'a-frame-cabin-21338',
    'alpine-lodge-10325',
    'birdhouse-31143',
    'bugatti-bolide-42151',
    'captain-rex-helmet-75349',
    'concorde-10318',
    'coruscant-guard-gunship-75354',
    'corvette-10321',
    'cozy-house-31139',
    'disney-castle-43222',
    'disney-hocus-pocus-the-sanderson-sisters-cottage-21341',
    'dried-flower-centrepiece-10314',
    'eldorado-fortress-10320',
    'emperor-s-throne-room-diorama-75352',
    'endor-speeder-chase-diorama-75353',
    'executor-super-star-destroyer-75356',
    'exotic-parrot-31136',
    'expecto-patronum-76414',
    'fantastical-tree-house-71461',
    'ghost-phantom-ii-75357',
    'gringotts-wizarding-bank-collectors-edition-76417',
    'himeji-castle-21060',
    'hogwarts-castle-and-grounds-76419',
    'jazz-club-10312',
    'land-rover-classic-defender-90-10317',
    'mandalorian-fang-fighter-vs-tie-interceptor-75348',
    'nasa-mars-rover-perseverance-42158',
    'nascar-next-gen-chevrolet-camaro-zl1-42153',
    'peugeot-9x8-24h-le-mans-hybrid-hypercar-42156',
    'pirate-snub-fighter-75346',
    'ski-and-climbing-center-60366',
    'snow-groomer-42148',
    'space-roller-coaster-31142',
    'space-shuttle-31134',
    'tales-of-the-space-age-21340',
    'the-insect-collection-21342',
    'the-lord-of-the-rings-rivendell-10316',
    'the-orient-express-train-21344',
    'the-sword-outpost-21244',
    'tie-bomber-75347',
    'tranquil-garden-10315',
    'up-house-43217',
    'up-scaled-lego-minifigure-40649',
    'venator-class-republic-attack-cruiser-75367',
    'viking-village-21343',
    'walt-disney-tribute-camera-43230',
    'wildflower-bouquet-10313',
    'x-wing-starfighter-75355'
]

const idsOfSets : string[] = [
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

const namesOfSets: { [key: string]: string } = {
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

const imagePathsToSets: { [key: string]: any } = {
    "42154": require('../assets/lego_sets/42154.png'), //https://brickset.com/article/92030/review-42154-ford-gt
    "75345": require('../assets/lego_sets/75345.png'), //https://brickset.com/article/87993/review-75345-501st-clone-troopers-battle-pack 
    "21338": require('../assets/lego_sets/21338.png'), //https://brickset.com/article/90167/review-21338-a-frame-cabin 
    "10325": require('../assets/lego_sets/10325.png'), //https://brickset.com/article/100244/review-10325-alpine-lodge 
    "31143": require('../assets/lego_sets/31143.png'), //https://brickset.com/article/88839/review-31143-birdhouse
    "42151": require('../assets/lego_sets/42151.png'), //https://brickset.com/article/86836/review-42151-bugatti-bolide 
    "75349": require('../assets/lego_sets/75349.png'), //https://brickset.com/article/90437/review-75349-captain-rex-helmet 
    "10318": require('../assets/lego_sets/10318.png'), //https://brickset.com/article/98631/review-10318-concorde
    "75354": require('../assets/lego_sets/75354.png'), //https://brickset.com/article/100180/review-75354-coruscant-guard-gunship
    "10321": require('../assets/lego_sets/10321.png'), //https://brickset.com/article/98024/review-10321-corvette
    "31139": require('../assets/lego_sets/31139.png'), //https://brickset.com/article/92285/review-31139-cozy-house
    "43222": require('../assets/lego_sets/43222.png'), //https://www.lego.com/en-pl/product/disney-castle-43222
    "21341": require('../assets/lego_sets/21341.png'), //https://brickset.com/article/97660/review-21341-disney-hocus-pocus-the-sanderson-sisters-cottage
    "10314": require('../assets/lego_sets/10314.png'), //https://www.lego.com/en-pl/product/dried-flower-centrepiece-10314
    "10320": require('../assets/lego_sets/10320.png'), //https://brickset.com/article/97564/review-10320-eldorado-fortress
    "75352": require('../assets/lego_sets/75352.png'), //https://brickset.com/article/93433/review-75352-emperor-s-throne-room 
    "75353": require('../assets/lego_sets/75353.png'), //https://brickset.com/article/93609/review-75353-endor-speeder-chase
    "75356": require('../assets/lego_sets/75356.png'), //https://brickset.com/article/94734/review-75356-executor-super-star-destroyer 
    "31136": require('../assets/lego_sets/31136.png'), //https://brickset.com/article/92652/quick-look-31136-exotic-parrot
    "76414": require('../assets/lego_sets/76414.png'), //https://www.lego.com/en-pl/product/expecto-patronum-76414
    "71461": require('../assets/lego_sets/71461.png'), //https://www.lego.com/en-pl/product/fantastical-tree-house-71461
    "75357": require('../assets/lego_sets/75357.png'), //https://brickset.com/article/99293/review-75357-ghost-phantom-ii 
    "76417": require('../assets/lego_sets/76417.png'), //https://brickset.com/article/99360/review-76417-gringotts-wizarding-bank-collectors-edition
    "21060": require('../assets/lego_sets/21060.png'), //https://brickset.com/article/98466/review-21060-himeji-castle 
    "76419": require('../assets/lego_sets/76419.png'), //https://brickset.com/article/101506/review-76419-hogwarts-castle-and-grounds
    "10312": require('../assets/lego_sets/10312.png'), //https://brickset.com/article/86696/review-10312-jazz-club 
    "10317": require('../assets/lego_sets/10317.png'), //https://brickset.com/article/92683/review-10317-land-rover-defender-90 
    "75348": require('../assets/lego_sets/75348.png'), //https://brickset.com/article/99459/review-75348-mandalorian-fang-fighter-vs-tie-interceptor 
    "42158": require('../assets/lego_sets/42158.png'), //https://brickset.com/article/95675/review-42158-nasa-mars-perseverance-rover
    "42153": require('../assets/lego_sets/42153.png'), //https://brickset.com/article/92837/review-42153-nascar-chevrolet-camaro-zl1
    "42156": require('../assets/lego_sets/42156.png'), //https://brickset.com/article/94838/review-42156-peugeot-9x8-hypercar
    "75346": require('../assets/lego_sets/75346.png'), //https://brickset.com/article/93610/review-75346-pirate-snub-fighter
    "60366": require('../assets/lego_sets/60366.png'), //https://www.lego.com/en-pl/product/ski-and-climbing-center-60366
    "42148": require('../assets/lego_sets/42148.png'), //https://brickset.com/article/88730/review-42148-snow-groomer
    "31142": require('../assets/lego_sets/31142.png'), //https://brickset.com/article/98217/review-31142-space-roller-coaster 
    "31134": require('../assets/lego_sets/31134.png'), //https://www.lego.com/en-pl/product/space-shuttle-31134
    "21340": require('../assets/lego_sets/21340.png'), //https://brickset.com/article/95045/review-21340-tales-of-the-space-age
    "21342": require('../assets/lego_sets/21342.png'), //https://www.lego.com/en-pl/product/the-insect-collection-21342
    "10316": require('../assets/lego_sets/10316.png'), //https://brickset.com/article/90675/review-10316-the-lord-of-the-rings-rivendell
    "21344": require('../assets/lego_sets/21344.png'), //https://www.lego.com/en-pl/product/the-orient-express-train-21344
    "21244": require('../assets/lego_sets/21244.png'), //https://www.youtube.com/watch?v=ssFE_GZZNjI
    "75347": require('../assets/lego_sets/75347.png'), //https://brickset.com/article/86892/review-75347-tie-bomber
    "10315": require('../assets/lego_sets/10315.png'), //https://brickset.com/article/98465/review-10315-tranquil-garden
    "43217": require('../assets/lego_sets/43217.png'), //https://brickset.com/article/92792/review-43217-up-house
    "40649": require('../assets/lego_sets/40649.png'), //https://brickset.com/article/96113/review-40649-up-scaled-lego-minifigure
    "75367": require('../assets/lego_sets/75367.png'), //https://brickset.com/article/99978/review-75367-venator-class-republic-attack-cruiser
    "21343": require('../assets/lego_sets/21343.png'), //https://brickset.com/article/99450/review-21343-viking-village
    "43230": require('../assets/lego_sets/43230.png'), //https://brickset.com/article/100687/review-43230-walt-disney-tribute-camera
    "10313": require('../assets/lego_sets/10313.png'), //https://www.lego.com/en-pl/product/wildflower-bouquet-10313
    "75355": require('../assets/lego_sets/75355.png'), //https://brickset.com/article/94966/review-75355-x-wing-starfighter 
};

export const useCreateTop5Ids = async (predictionArray: Float32Array): Promise<{text: string[], images: string[], links: string[]}> =>{
    // Create an array of indices [0, 1, 2, ..., n-1]
    const indices = Array.from(predictionArray.keys());

    // Sort the indices based on the values in predictionArray in descending order
    indices.sort((a, b) => predictionArray[b] - predictionArray[a]);

    // Return the top 5 indices
    const top5indices = indices.slice(0, 5);

    const top5indicesCut = top5indices.filter(index => predictionArray[index]*100 >= 1)

    const images = top5indicesCut.map(index => Image.resolveAssetSource(imagePathsToSets[idsOfSets[index]]).uri)

    const links = top5indicesCut.map(index => "https://www.lego.com/en-pl/product/" + allSets[index])

    return {
        text: top5indicesCut.map(
            index => "ID: " + idsOfSets[index] + "\nNazwa: " + namesOfSets[idsOfSets[index]]
            + "\nPewność: " + (predictionArray[index]*100).toFixed(0).toString() + "%"
        ),
        images: images,
        links: links
    };
}