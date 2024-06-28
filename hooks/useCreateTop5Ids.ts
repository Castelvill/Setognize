const setNames : string[] = ['2022-ford-gt-42154',
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
    'x-wing-starfighter-75355']

export const useCreateTop5Ids = async (predictionArray: Float32Array): Promise<string[]> =>{
    // Create an array of indices [0, 1, 2, ..., n-1]
    const indices = Array.from(predictionArray.keys());

    // Sort the indices based on the values in predictionArray in descending order
    indices.sort((a, b) => predictionArray[b] - predictionArray[a]);

    // Return the top 5 indices
    const top5indices = indices.slice(0, 5);

    return top5indices.map(id => (predictionArray[id]*100).toFixed(0).toString() + "% \t" + setNames[id]);
}