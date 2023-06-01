const chaosChance = 6;
const realChaosChance = 50;

const species           = [ "Baby Blue Bear",
                            "Bearemy",
                            "Birthday Treat Bears",
                            "Black Bear",
                            "Blue Bear",
                            "Blue Fluffy Bear",
                            "Chubby Cubby",
                            "Cocoa Cuddles Bear",
                            "Colourful Peace Bear",
                            "Coral Bear",
                            "Cozy Cuddles Teddy",
                            "Crayola Bear",
                            "Curly Bear",
                            "Festive Fun Panda",
                            "Green Bear-lien",
                            "Happy Hugs",
                            "Hearts 'n' Hugs Teddy",
                            "Hockey Bear",
                            "Kabu Bearnard",
                            "Lavender Bear",
                            "Lil' Cub Brownie",
                            "Lil' Cub Pudding",
                            "Mer-Bear",
                            "Mint Bear",
                            "Night Sky Teddy",
                            "Ocean Treasure Bear",
                            "Pastel Bear Fairy Friend",
                            "Pastel Bouquet Bear",
                            "Pink Bouquet Bear",
                            "Pink Cuddles Teddy",
                            "Polar Bear",
                            "Pumpkin Glow Bear",
                            "Pumpkin Spice Bear",
                            "Purple Bear-lien",
                            "Rainbow Bear",
                            "Rainbow Friends Bear",
                            "Rainbow Panda",
                            "Rainbow Sparkle Bear",
                            "Read Teddy",
                            "Silver Celebration Bear",
                            "Sparkle Panda",
                            "Swarovski Crystal Bear",
                            "Sweet Dreams Bear",
                            "Timeless Teddy",
                            "White Bouquet Bear",
                            "Yellow Bouquet Bear",
                            "Yellow-Tie-Dye Bear",
                            "Zombear",
                            "Hot Topic Bear",
                            "Floral Pawlette",
                            "Flower Power Floral Bunny",
                            "Gentle Cuddles Bunny",
                            "Kabu Pawlette",
                            "Pastel Swirl Pawlette",
                            "Pawlette",
                            "Pink Pawlette",
                            "Polka Dot Pawlette",
                            "Sugar Plum Bunny",
                            "Green Frog",
                            "Hoppy Swirls Frog",
                            "Jolly Jumps Frog",
                            "Mer-Frog",
                            "Purple Frog",
                            "Spring Pink Frog",
                            "Teal Frog",
                            "Toadally Tie-Dye Pink Frog",
                            "Blueberry Cow",
                            "Christmas Cow",
                            "Longhorn Cow",
                            "Strawberry Cow",
                            "Arctic Pink Reindeer",
                            "Glacial Glisten",
                            "Grey Gust Moose",
                            "Maple Leaf Moose",
                            "Santa's Reindeer",
                            "Snow Magical Glisten",
                            "Snowflake Swirl Glisten",
                            "Winter Wishes Moose",
                            "Barkleigh",
                            "Bernese Mountain Dog",
                            "Black Labrador",
                            "Brown 'n' White Puppy",
                            "German Shepherd",
                            "Hearts For You Pup",
                            "Labradoodle",
                            "Mutt",
                            "Wolf Pup",
                            "Black Halloween Cat",
                            "Brown Striped Kitty",
                            "Floppy Kitty",
                            "Grey 'n' White Kitty",
                            "Kabu Catlyn",
                            "Mer-Cat",
                            "Pastel Swirl Kitty",
                            "Purple Magic Halloween Cat",
                            "Rainbow Friends Cat",
                            "Rainbow Kittycorn",
                            "Sassy Cat",
                            "Snow Leopard",
                            "Lavender Axolotl",
                            "Mint Axolotl",
                            "Pink Axolotl",
                            "Rainbow Axolotl",
                            "Tie-Dye Axolotl",
                            "Candy Cane Unicorn",
                            "Candy Corn Unicorn",
                            "Colour Craze Unicorn",
                            "Fairy Friends Enchanted Unicorn",
                            "Fairy Friends Magic Unicorn",
                            "Pink Llamacorn",
                            "Rainbow Unicorn",
                            "Red Fairy Berry Unicorn",
                            "Swirl Unicorn",
                            "Tie-Dye Unicorn",
                            "White Fairy Berry Unicorn",
                            "Blue T-Rex",
                            "Fairy Friends Enchanted Dragon",
                            "Fairy Berry Dragon",
                            "Red Raptor",
                            "Triceratops",
                            "Apatosaurus",
                            "Rainbow Hearts Triceratops",
                            "Carnotaurus",
                            "Bubble Shark",
                            "Dolphin",
                            "Great White Shark",
                            "Heartwarming Hippo",
                            "Mystical Narwhal",
                            "Otter",
                            "Otterly Adorable Otter",
                            "Pink Otter",
                            "Rainbow Octopus",
                            "Sea Splash Dolphin",
                            "Seahorsicorn",
                            "Seal",
                            "Shark Week Tiger Shark",
                            "Starfish",
                            "Arctic Pink Fox",
                            "Blue Peep",
                            "Brown Sloth",
                            "Fancy Flamingo",
                            "Fox",
                            "Icy Blue Penguin",
                            "Lucky Ducky",
                            "Opossum",
                            "Orange Peep",
                            "Palomino Horse",
                            "Pink Frost Fox",
                            "Pink Peep",
                            "Pink Sloth",
                            "Pinky Pig",
                            "Raccoon",
                            "Red Hearts Monkey",
                            "Red Panda",
                            "Smiley Monkey",
                            "Squirrel",
                            "Turquoise Peep",
                            "Wild Hearts Monkey",
                            "Wooly Cute Alpaca",
                            "Yellow Confetti Peep",
                            "\"Oh, the Places You'll Go!\" Bear",
                            "Alpha Lexa",
                            "Beetlejuice Bear",
                            "Beta",
                            "Branch",
                            "Chase",
                            "Cinnamoroll",
                            "Combo Panda",
                            "Doctor Who Bear",
                            "Dungeons & Dragons Dragon",
                            "E.T.",
                            "Eeyore",
                            "FRIENDS Bear",
                            "Gidget",
                            "Grinch",
                            "Gus the Gummy Gator",
                            "Hello Kitty",
                            "Hidden World Toothless",
                            "Jack Skellington Bear",
                            "Liberty",
                            "Lord of the Rings Bear",
                            "Love, Diana Bear",
                            "Minion Bob",
                            "Minion Kevin",
                            "Minion Otto",
                            "Miraculous Ladybug Bear",
                            "Oogie Boogey",
                            "Phoenix Force Bear",
                            "PJ Masks Bear",
                            "Pooh Bear",
                            "Poppy",
                            "Puss In Boots",
                            "Red Panda Mei",
                            "Sally Bear",
                            "Scooby-Doo",
                            "Skye",
                            "Snoopy",
                            "T-Rex (Jurassic World)",
                            "Tigger",
                            "Toothless",
                            "WeWearCute Bear",
                            "Zero",
                            "Shrek",
                            "Shrek Baby",
                            "The Flash Bear",
                            "Captain Marvel Bear",
                            "Light Fury",
                            "Thomas the Tank Engine Bear",
                            "Alolan Vulpix",
                            "Bulbasaur",
                            "Charmander",
                            "Dragonite",
                            "Eevee",
                            "Espeon",
                            "Flareon",
                            "Gengar",
                            "Glaceon",
                            "Grookey",
                            "Growlithe",
                            "Jigglypuff",
                            "Jolteon",
                            "Leafeon",
                            "Meowth",
                            "Mew",
                            "Pichu",
                            "Pikachu",
                            "Piplup",
                            "Psyduck",
                            "Scorbunny",
                            "Snorlax",
                            "Snubble",
                            "Sobble",
                            "Squirtle",
                            "Sylveon",
                            "Teddiursa",
                            "Umbreon",
                            "Vaporeon",
                            "Vulpix",
                            "Keely",
                            "Misha",
                            "Risa",
                            "Stella",
                            "Teegan",
                            "Viv",
                            "Bantha",
                            "Boba Fett Bear",
                            "Darth Vader Bear",
                            "Grogu",
                            "Holiday Grogu",
                            "Jawa Bear",
                            "Mandalorian",
                            "Rancor",
                            "Rey Bear",
                            "Summer Grogu",
                            "Wampa",
                            "Buckbeak",
                            "Dobby",
                            "Fawkes",
                            "Gryffindor Lion",
                            "Harry Potter Bear",
                            "Hedwig",
                            "Niffler",
                            "Otter Patronus",
                            "Ravenclaw Raven",
                            "Slytherin Snake",
                            "Stag Patronus",
                            "Bowser",
                            "Isabelle",
                            "K.K. Slider",
                            "Sonic (Sonic 2)",
                            "Sonic the Hedgehog",
                            "Tails",
                            "Tom Nook",
                            "100th Anniversary Stitch",
                            "Aladdin Bear",
                            "Aloha Christmas Stitch",
                            "Anna-Inspired Bear",
                            "Ariel Bear",
                            "Baby Groot",
                            "Black Panther Bear",
                            "Black Widow Bear",
                            "Disney Princess Bear",
                            "Doctor Strange Bear",
                            "Elsa-Inspired Bear (New)",
                            "Elsa-Inspired Bear (Old)",
                            "Genie Bear",
                            "Jasmine Bear",
                            "Mike Wazowski",
                            "Olaf (Current)",
                            "Olaf (Recalled)",
                            "Pumba",
                            "Shuri Bear",
                            "Simba",
                            "Spider-Man Bear",
                            "Spooky Fun Stitch",
                            "Spring Tie-Dye Stitch",
                            "Stitch",
                            "Sulley (Current)",
                            "Sulley (Recalled)",
                            "Ursula Bear",
                            "Valentine's Stitch",
                            "Vision Bear",
                            "Young Nala",
                            "Rainbow Dash",
                            "Pinkie Pie",
                            "Fluttershy",
                            "Princess Twilight Sparkle",
                            "Applejack",
                            "Rarity",
                            "Trixie",
                            "Applebloom",
                            "Sweetie Belle",
                            "Scootaloo",
                            "Princess Celestia",
                            "Zecora",
                            "Princess Cadance",
                            "Shining Armor",
                            "Princess Luna",
                            "DJ Pon-3",
                            "Muffins",
                            "Minty",
                            "Starlight Glimmer",
                            "Big McIntosh",
                            "Cheerilee",
                            "Sunset Shimmer",
                            "Songbird Serenade",
                            "Tempest Shadow",
                            "Ohio State Brutus"];
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
                            "a beautiful disaster.",
                            "a richer place with me in it."];
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
                            "Itchy"];
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
                            "Chain links",
                            "Blood and organs and stuff",
                            "Almond flour",
                            "Crumpled newspaper",
                            "Shredded legal documents",
                            "Children's mittens",
                            "Bubble wrap",
                            "Packing peanuts",
                            "Orbeez",
                            "Scraps of faux fur",
                            "Live worms",
                            "Paperclips",
                            "Assorted vines and ivies",
                            "Water-filled bladders",
                            "A purpose-built endoskeleton"];

var preoccupationsTemplate;
var phobiasTemplate;
var prejudiceTemplate;
var purposeTemplate;
var perspectiveTemplate;
var speciesTemplate;
var demeanorTemplate;
var fillingTemplate;

var preoccupationGeneratedFirst;
var preoccupationGeneratedSecond;
var phobiaGeneratedFirst;
var phobiaGeneratedSecond;

var chaosCheck1;
var chaosCheck2;
var chaosCheck3;
var chaosCheck4;

var realChaosCheck;
var speciesCheck;

function generateBears() {
    reset();

    var numBearsToGenerate = document.getElementById("quantity").value;
    for (let i = 0; i < numBearsToGenerate; i++) {
        fillTemplate();
    }
}

function fillTemplate() {
    preoccupationsTemplate = "Preoccupations: ";
    phobiasTemplate = "Phobias: ";
    prejudiceTemplate = "Prejudice: ";
    purposeTemplate = "Purpose: ";
    perspectiveTemplate = "Perspective: The world is ";
    speciesTemplate = "Species: ";
    demeanorTemplate = "Demeanor: ";
    fillingTemplate = "Filling: ";

    /*
    var preoccupationGeneratedFirst;
    var preoccupationGeneratedSecond;
    var phobiaGeneratedFirst;
    var phobiaGeneratedSecond;
    */
    
    chaosCheck1 = Math.floor(Math.random() * chaosChance);
    chaosCheck2 = Math.floor(Math.random() * chaosChance);
    chaosCheck3 = Math.floor(Math.random() * chaosChance);
    chaosCheck4 = Math.floor(Math.random() * chaosChance);

    realChaosCheck = Math.floor(Math.random() * realChaosChance);
    speciesCheck = document.getElementById("speciesToggle").checked;

    var newDiv = document.createElement("div");
    newDiv.setAttribute('class','bear');

    // Species
        if (speciesCheck == true) {
            speciesTemplate += species[Math.floor(Math.random() * species.length)];

            newDiv.appendChild(document.createTextNode(speciesTemplate));
            newDiv.appendChild(document.createElement("br"));
            newDiv.appendChild(document.createElement("br"));
        }

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
        prejudiceTemplate += prejudices[Math.floor(Math.random() * prejudices.length)];
        newDiv.appendChild(document.createTextNode(prejudiceTemplate));
        newDiv.appendChild(document.createElement("br"));
    
    // Purpose
        purposeTemplate += purposes[Math.floor(Math.random() * purposes.length)];
        newDiv.appendChild(document.createTextNode(purposeTemplate));
        newDiv.appendChild(document.createElement("br"));

    // Perspective
        perspectiveTemplate += perspectives[Math.floor(Math.random() * perspectives.length)];
        newDiv.appendChild(document.createTextNode(perspectiveTemplate));

    // Filling
        if (realChaosCheck == 0) {
            fillingTemplate += fillings[Math.floor(Math.random() * fillings.length)];

            newDiv.appendChild(document.createElement("br"));
            newDiv.appendChild(document.createElement("br"));
            newDiv.appendChild(document.createTextNode(fillingTemplate));
        }

    document.body.insertBefore(newDiv, document.getElementById("footer"))
    document.body.insertBefore(document.createElement("br"), document.getElementById("footer"));
}

function reset() {
    var bears = document.getElementsByClassName("bear");
    var breaks = document.getElementsByTagName("br");

    while (bears[0]) {
        bears[0].parentNode.removeChild(bears[0]);
    }

    while (breaks[0]) {
        breaks[0].parentNode.removeChild(breaks[0]);
    }
}
