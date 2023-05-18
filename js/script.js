const chaosChance = 6;

const species           = [ ];
const preoccupations    = [ "Hygiene",
                            "Fine dining",
                            "Comfort",
                            "Oral fixation",
                            "Sleep",
                            "Leadership",
                            "Artistry",
                            "Literature",
                            "Poise",
                            "Knowledge",
                            "Discovery",
                            "Curiosity",
                            "Amusement",
                            "Love",
                            "Blood",
                            "Victory",
                            "Nature",
                            "Adventure",
                            "Novelty",
                            "Drama",
                            "Intrigue",
                            "Mystery",
                            "Butter",
                            "Culture",
                            "Smells",
                            "Justice",
                            "Song",
                            "Shiny things",
                            "Derring-do",
                            "Silence",
                            "Exercise",
                            "Lore",
                            "Doodling",
                            "Practice",
                            "Poking",
                            "Reflection",
                            "Drinking",
                            "Mockery",
                            "Contempt",
                            "Jurisprudence",
                            "Deals",
                            "Bookkeeping",
                            "Eureka!",
                            "Stillness",
                            "Fashion",
                            "Forts",
                            "Going Fast",
                            "Stories",
                            "Larceny",
                            "Jokes",
                            "Pranks",
                            "Cemeteries",
                            "Simplicity",
                            "Accessorizing",
                            "Travel",
                            "Mist",
                            "Theatre",
                            "Sandcastles",
                            "Knitting",
                            "Flowers",
                            "Structure",
                            "Discipline",
                            "Routine",
                            "Rhyme",
                            "Hugs",
                            "Religion",
                            "Appending the word 'Bear' to other words",
                            "Cakes",
                            "Stealing",
                            "Architecture",
                            "Beauty",
                            "Games",
                            "Words",
                            "Clarity",
                            "Names",
                            "Bravery",
                            "Money",
                            "Feng Shui",
                            "Stacking",
                            "Retirement"];
const phobias           = [ "Darkness",
                            "Enclosed spaces",
                            "Stairs",
                            "Bathing",
                            "Math",
                            "Hands",
                            "Judgment",
                            "Crowds",
                            "Loneliness",
                            "Mirrors",
                            "Dolls",
                            "Eyes",
                            "Poverty",
                            "Children",
                            "Sleep",
                            "Loss of control",
                            "Chickens",
                            "Vastness",
                            "Society",
                            "Frogs",
                            "Death",
                            "The Dead",
                            "Humanoids",
                            "Bridges",
                            "Houses",
                            "Cats",
                            "Heights",
                            "Insects",
                            "Time",
                            "Pain",
                            "Fire",
                            "Water",
                            "Flight",
                            "Heights",
                            "Loss",
                            "Gods",
                            "Teeth",
                            "Fear Itself",
                            "Rain",
                            "Sunlight",
                            "Horses",
                            "Sharp Edges",
                            "The Unknown",
                            "The Ocean",
                            "Skin",
                            "Loud sounds",
                            "Whispering",
                            "Lies",
                            "Being Underground",
                            "Illness",
                            "Holes",
                            "The Cold",
                            "Bureaucracy",
                            "Stars",
                            "Corruption",
                            "Surveillance",
                            "Betrayal",
                            "Responsibility",
                            "Contaminants",
                            "Glass"];
const prejudices        = [ "Stuffies",
                            "Enfleshed",
                            "Small animals",
                            "The Unholy",
                            "The Holy",
                            "Food",
                            "The Self",
                            "Authority",
                            "Weakness",
                            "Fear",
                            "Gods",
                            "Artists",
                            "Thieves",
                            "Sticky things",
                            "Wet things",
                            "Fools",
                            "Outsiders",
                            "Intruders",
                            "Fakers",
                            "Orphans",
                            "Adults",
                            "Children",
                            "The wealthy",
                            "The poor",
                            "Atheists",
                            "Filth",
                            "Names longer than 3 syllables",
                            "Laziness",
                            "Sinners",
                            "Comedians",
                            "Sweets",
                            "The working class",
                            "Those more fortunate than you",
                            "Dreamers",
                            "Poets",
                            "Deserters",
                            "Prisoners",
                            "Musicians",
                            "Being touched",
                            "Arrogance",
                            "Doubt",
                            "Locked doors",
                            "Metal",
                            "Humidity",
                            "Debtors",
                            "Facial hair",
                            "School",
                            "Cowards",
                            "The colour yellow",
                            "Dolphins"];
const purposes          = [ "Recover the Creator.",
                            "Recover the Self.",
                            "Accrue Wealth.",
                            "Protect them All.",
                            "Attain Glory.",
                            "Spread an Idea.",
                            "Resolve a Guilt.",
                            "Prove them Right.",
                            "Prove them Wrong.",
                            "Spread Joy.",
                            "Shake it up.",
                            "Make them Pay.",
                            "Redeem Myself.",
                            "Fit in with Them.",
                            "Live.",
                            "Find It.",
                            "Achieve Victory.",
                            "Be Remembered.",
                            "Conquer my Fear.",
                            "Clear their Name.",
                            "Become Reborn.",
                            "Become Ruler.",
                            "Complete my Collection.",
                            "Fulfill my Purpose.",
                            "Win.",
                            "Solve an Issue.",
                            "Find my Soulmate.",
                            "Rid myself of It.",
                            "Have whatever They can't.",
                            "Stop that Criminal.",
                            "Become Powerful.",
                            "Discover their Secrets.",
                            "Do the Impossible.",
                            "Dispense Justice.",
                            "Be Safe.",
                            "Find Forgiveness.",
                            "Forgive Them.",
                            "Find the Cure.",
                            "Remember It.",
                            "Escape.",
                            "Find Peace.",
                            "Apologize to Them.",
                            "Rekindle a Passion.",
                            "Answer a Question.",
                            "End the Cycle.",
                            "Take my Rightful Place.",
                            "Makes things Right.",
                            "Burn it Down.",
                            "Learn a Truth.",
                            "Spread a Lie.",
                            "Live Happily ever After.",
                            "Watch over Them."];
const perspectives      = [ "a terrifying place, with monsters around every corner.",
                            "a stage, where anyone can shine!",
                            "a big ol' sandwich.",
                            "a toybox full of wonders.",
                            "a battleground, where only the strong survive.",
                            "too much to handle.",
                            "a prison.",
                            "infested.",
                            "unjust.",
                            "black and white.",
                            "a canvas.",
                            "always watching.",
                            "not ready for me.",
                            "hiding something.",
                            "illusory.",
                            "a monument to the wicked.",
                            "decaying.",
                            "a joke.",
                            "guiding me.",
                            "swarming.",
                            "a melting obelisk.",
                            "a reflection of myself.",
                            "a puzzle to be mastered.",
                            "small.",
                            "merciless.",
                            "God's greatest gift.",
                            "out to get me.",
                            "waiting for me with open arms.",
                            "a series of miracles.",
                            "entirely edible, probably.",
                            "a beautiful disaster."];
const demeanors         = [ "Cheerful",
                            "Grumpy",
                            "Flirty",
                            "Depressed",
                            "Mischievous",
                            "Cool",
                            "Abrasive",
                            "Nervous",
                            "Wordy",
                            "Argumentative",
                            "Nerdy",
                            "Jockish",
                            "Jocular",
                            "Obnoxious",
                            "Itchy",];
const fillings          = [ "Rice",
                            "Sponges",
                            "Beans",
                            "Sawdust",
                            "Jelly",
                            "Marbles",
                            "Ball bearings",
                            "Dice",
                            "Marshmallows",
                            "Wax shavings",
                            "Small plastic dinosaurs",
                            "Socks",
                            "Nuts and bolts",
                            "Memory foam",
                            "Feathers",
                            "Spent shell casings",
                            "Springs",
                            "Insect carcasses",
                            "Small, unmarked bills",
                            "Polaroid photographs",
                            "Treasure maps",
                            "Wet sand",
                            "Gravel",
                            "Leaves",
                            "Straw",
                            "Chain links",];

function generateBears() {
    reset();

    var numBearsToGenerate = document.getElementById("quantity").value;
    for (let i = 0; i < numBearsToGenerate; i++) {
        fillTemplate();
    }
}

function fillTemplate() {
    var preoccupationsTemplate = "Preoccupations: ";
    var phobiasTemplate = "Phobias: ";
    var prejudiceTemplate = "Prejudice: ";
    var purposeTemplate = "Purpose: ";
    var perspectiveTemplate = "Perspective: The world is ";
    var speciesTemplate = "Species: ";
    var demeanorTemplate = "Demeanor: ";
    var fillingTemplate = "Filling: ";

    var preoccupationGeneratedFirst;
    var preoccupationGeneratedSecond;
    var phobiaGeneratedFirst;
    var phobiaGeneratedSecond;
    
    var chaosCheck1 = Math.floor(Math.random() * chaosChance);
    var chaosCheck2 = Math.floor(Math.random() * chaosChance);
    var chaosCheck3 = Math.floor(Math.random() * chaosChance);
    var chaosCheck4 = Math.floor(Math.random() * chaosChance);

    var newDiv = document.createElement("div");
    newDiv.setAttribute('class','bear');

    // Preoccupations
        if (chaosCheck1 > 0) {
            preoccupationGeneratedFirst = preoccupations[Math.floor(Math.random() * preoccupations.length)];
        } else {
            preoccupationGeneratedFirst = phobias[Math.floor(Math.random() * phobias.length)];
        }
        preoccupationsTemplate += preoccupationGeneratedFirst + ", ";

        do {
            if (chaosCheck2 > 0) {
                preoccupationGeneratedSecond = preoccupations[Math.floor(Math.random() * preoccupations.length)];
            } else {
                preoccupationGeneratedSecond = phobias[Math.floor(Math.random() * phobias.length)];
            }
        } while (preoccupationGeneratedSecond == preoccupationGeneratedFirst);
        preoccupationsTemplate += preoccupationGeneratedSecond;

        newDiv.appendChild(document.createTextNode(preoccupationsTemplate));
        newDiv.appendChild(document.createElement("br"));

    // Phobias
        do {
            if (chaosCheck3 > 0) {
                phobiaGeneratedFirst = phobias[Math.floor(Math.random() * phobias.length)];
            } else {
                phobiaGeneratedFirst = preoccupations[Math.floor(Math.random() * preoccupations.length)];
            }
        } while (   phobiaGeneratedFirst == preoccupationGeneratedFirst ||
                    phobiaGeneratedFirst == preoccupationGeneratedSecond);
        phobiasTemplate += phobiaGeneratedFirst + ", ";

        do {
            if (chaosCheck4 > 0) {
                phobiaGeneratedSecond = phobias[Math.floor(Math.random() * phobias.length)];
            } else {
                phobiaGeneratedSecond = preoccupations[Math.floor(Math.random() * preoccupations.length)];
            }
        } while (   phobiaGeneratedSecond == phobiaGeneratedFirst ||
                    phobiaGeneratedSecond == preoccupationGeneratedFirst ||
                    phobiaGeneratedSecond == preoccupationGeneratedSecond);
        phobiasTemplate += phobiaGeneratedSecond;

        newDiv.appendChild(document.createTextNode(phobiasTemplate));
        newDiv.appendChild(document.createElement("br"));
    
    // Prejudice
        prejudiceTemplate += (prejudices[Math.floor(Math.random() * prejudices.length)]);
        newDiv.appendChild(document.createTextNode(prejudiceTemplate));
        newDiv.appendChild(document.createElement("br"));
    
    // Purpose
        purposeTemplate += (purposes[Math.floor(Math.random() * purposes.length)]);
        newDiv.appendChild(document.createTextNode(purposeTemplate));
        newDiv.appendChild(document.createElement("br"));

    // Perspective
        perspectiveTemplate += (perspectives[Math.floor(Math.random() * perspectives.length)]);
        newDiv.appendChild(document.createTextNode(perspectiveTemplate));
        newDiv.appendChild(document.createElement("br"));

    document.body.insertBefore(newDiv, document.getElementById("footer"));
}

function reset() {
    var bears = document.getElementsByClassName("bear");

    while (bears[0]) {
        bears[0].parentNode.removeChild(bears[0]);
    }
}
