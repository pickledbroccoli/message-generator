// random selector for a dictionary
function randomSelector(arr) {
    let index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

const locations = ['an ominous crossroad', 'an ancient ruin of the Elder Ones', 'the gates of DustBottom City', 'a broken cart', 'a nice oak tree', 'an empty well', 'the cemetery gates', 'Rick\'s American Bar', 'a quiet village', 'the mouth of a dark cave', 'a creepy old windmill', 'a peaceful lake', 'the korean DMZ', 'the End of the World - as we know it', 'the community pool'];
const datetimes = [];
const quests = [];
const legendaries = [];
const facts = [];
const creatureNames = [];
const adjectives = [];
const sizes = ['small', 'medium', 'large', 'enormous'];
const bodyParts = [];
const nouns = [];
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
            howMany = Math.ceil(Math.random() * 3);
            break;
        case 'large':
            multiple = 's';
            howMany = Math.ceil(Math.random() * 5) + 2;
            break;
        case 'enourmous':
            multiple = 's';
            howMany = Math.ceil(Math.random() * 10) + 9;
    }

    return `You are on your way to ${quest}. It is ${time}, and you arrive at ${location}.
    Oh! Suddenly a${adjective} ${creature} appears! It has ${howMany} ${noun}${multiple} as its ${body}${multiple}.
    You've heard of these before - ${fact}.
    `;
}


console.log(randomTemplateFiller());