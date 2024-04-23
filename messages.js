// random selector for a dictionary
function randomSelector(arr) {
    let index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

const locations = ['an ominous crossroad', 'an ancient ruin of the Elder Ones', 'the gates of DustBottom City', 'a broken cart', 'a nice oak tree', 'an empty well', 'the cemetery gates', 'Rick\'s American Bar', 'a quiet village', 'the mouth of a dark cave', 'a creepy old windmill', 'a peaceful lake', 'the korean DMZ', 'the End of the World - as we know it', 'the community pool'];
const datetimes = ['nighttime', 'high noon', 'just a few minutes after breakfast time', 'two minutes to midnight', '16:20', 'dinner time', 'party time', 'HammerTime!', 'late afternoon', 'early night after a long day', 'dusk', 'the dawn of the new day'];
const quests = ['retrieve money from the ATM', 'cook lunch for the boys', 'save Princess Apricot', 'take over the local KFC', 'fetch water form the well', 'drink a coffee', 'deliver an important message to the king', 'catch the leader of the yakuza'];
const legendaries = []; //later
const facts = ['they are afraid of wooden spoons', 'they must be cleansed with distilled water', 'they can\'t pronounce the letter "f"', 'they can toggle night-vision', 'they are immune to the common cold', 'they can eat a paella bowl as a whole', 'they not allowed to use stairs', 'they aren\'t real', 'they can see in the dark', 'they can smell color'];
const creatureNames = ['gnome', 'hobgoblin', 'hydra', 'miniature dragon', 'almost-wyvern', 'succubus', 'troll', 'halfling', 'elven ranger', 'undead wizard', 'lych', 'ghoul', 'vampire', 'three-dwarves-in-a-trench-coat', 'wild sheep', 'mutant', 'zombie', 'flesh-eating amoeba', 'gelatinous tetrahedron', 'ork bandit'];
const adjectives = ['hairy', 'exceptionally tall', 'blue-feathered', 'pesky', 'hungry', 'fat', 'swollen', 'thicc', 'green', 'yellow-tainted', 'sad', 'jumping', 'misunderstood', 'tattooed', 'skin-and-bones', 'sleepy', 'angry', 'raging', 'sitting', 'letivating', 'fruitfly-haloed', 'drunk', 'red'];
const sizes = ['small', 'medium', 'large', 'enormous'];
const bodyParts = ['big toe', 'knee', 'mouth', 'ear', 'nose', 'chesthair', 'jaw', 'eyebrow', 'elbow', 'hand', 'leg', 'nipple', 'lip', 'arm', 'neck'];
const nouns = ['spoon', 'juniper tree', 'sword', 'microchip', 'red chief apple', 'chicken feather', 'worm', 'coffee break', 'rope', 'whisk', 'pen', 'mug', 'knitted sweater', 'jumper cable'];
let multiple = '';
let howMany = '';

function randomTemplateFiller(){

    let quest = randomSelector(quests);
    let time = randomSelector(datetimes);
    let location = randomSelector(locations);
    let adjective = randomSelector(adjectives);
    
    // a(n) handling
    if (/^[aeiou]/.test(adjective)){
        adjective = 'n ' + adjective;
    } else {
        adjective = ' ' + adjective;
    }

    let creature = randomSelector(creatureNames);
    let noun = randomSelector(nouns);
    let body = randomSelector(bodyParts);
    let fact = randomSelector(facts);
    let size = randomSelector(sizes);

    // sizewise...
    switch (size) {
        case 'small':
            howMany = 'a';
            break;
        case 'medium':
            multiple = 's';
            howMany = Math.ceil(Math.random() * 3) + 1;
            break;
        case 'large':
            multiple = 's';
            howMany = Math.ceil(Math.random() * 5) + 2;
            break;
        case 'enormous':
            multiple = 's';
            howMany = Math.ceil(Math.random() * 10) + 9;
            break;
    }

    return `You are on your way to ${quest}. It is ${time}, and you arrive at ${location}.
    Oh! Suddenly a${adjective} ${creature} appears! It has ${howMany} ${noun}${multiple} as its ${body}${multiple}.
    You've heard of these before - ${fact}.`;
}

// we have a button to click!
const generatorButton = document.getElementById('generator');
const textPlate = document.getElementById('random-text');

// we have a template to fill!
function fillTextPlateWithRandomText() {
    textPlate.innerHTML = randomTemplateFiller();
    multiple = '';
    howMany = '';
}

generatorButton.addEventListener('click', fillTextPlateWithRandomText);

//console.log(randomTemplateFiller());