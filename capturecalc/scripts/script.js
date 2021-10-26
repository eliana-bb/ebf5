var Foes = [
    ["Chocolate Slime", 90], ["Sand Slime", 90], ["Icecream Slime", 90], ["Lava Slime", 90], ["Mud Slime", 90], ["Water Slime", 90], ["Slime Bunny", 90], ["Slime Mouse", 90], ["Big Chocolate Slime", 7], ["Big Sand Slime", 7],
    ["Big Icecream Slime", 7], ["Big Lava Slime", 7], ["Big Mud Slime", 7], ["Cat Warrior", 55], ["Cat Wizard", 55], ["Cat Sniper", 55], ["Cat Bomber", 55], ["Cat Ninja", 55], ["Skeleton Cat", 24], ["Green Bush", 80],
    ["Red Bush", 80], ["Muddy Bush", 80], ["Sandy Bush", 80], ["Dark Bush", 80], ["Putrid Worm", 60], ["Fuzzy Worm", 60], ["Scaly Worm", 60], ["Cutie Worm", 60], ["Book Worm", 60], ["Blood Bat", 50],
    ["Snow Bat", 50], ["Bone Bat", 50], ["Electric Bat", 50], ["Rescue Dog", 45], ["Tanuki Dog", 45], ["Wolf Dog", 45], ["Zap Dog", 45], ["Mage Dog", 45], ["Brown Bear", 10], ["Black Bear", 10],
    ["Grolar Bear", 10], ["Panda Bear", 10], ["Camel Mammoth", 5], ["Wooly Mammoth", 5], ["War Mammoth", 5], ["Wooden Idol", 70], ["Gem Idol", 70], ["Metal Idol", 70], ["Stone Idol", 70], ["Stumpy Gloop", 36],

    ["Roasted Gloop", 36], ["Fabulous Gloop", 26], ["Hardy Gloop", 36], ["Chunky Gloop", 36], ["Fire Sprite", 42], ["Ice Sprite", 42], ["Rock Sprite", 42], ["Thunder Sprite", 42], ["Wind Sprite", 42], ["Leafy Chomper", 9],
    ["Magma Chomper", 9], ["Seaweed Chomper", 9], ["Mutant Chomper", 9], ["Pink Squid", 7], ["Purple Squid", 7], ["Lime Squid", 7], ["Thorny Creep", 20], ["Icicle Creep", 20], ["Hermit Creep", 20], ["Green Creep", 20],
    ["Red Creep", 20], ["Blue Creep", 20], ["Steam Fish", 38], ["Jet Fish", 38], ["Gold Fish", 38], ["Red Flybot", 16], ["Yellow Flybot", 16], ["Blue Flybot", 16], ["Defender Mk III", 6], ["Bubbler MX-01", 6],
    ["Prototype 9X", 6], ["Flame Wraith", 25], ["Frost Wraith", 25], ["Leaf Wraith", 25], ["Steel Wraith", 25], ["Origami Wraith", 25], ["Master Wraith", 25], ["Haunted Mirror", 32], ["Wise Mirror", 32], ["Demon Mirror", 32],
    ["Angel Mirror", 32], ["Zombie Hand", 35], ["Magma Hand", 35], ["Skeleton Hand", 35], ["Burned Fallen", 13], ["Lost Fallen", 13], ["Crucified Fallen", 13], ["Drowned Fallen", 13], ["Beheaded Fallen", 13], ["Matt Doll", 23],

    ["Natalie Doll", 23], ["Lance Doll", 23], ["Anna Doll", 23], ["NoLegs Doll", 23], ["Zircon Ore", 33], ["Sapphire Ore", 33], ["Peridot Ore", 33], ["Quartz Ore", 33], ["Amethyst Ore", 33], ["Topaz Ore", 33],
    ["Ruby Ore", 33], ["Sandstone Boulder", 18], ["Dirt Boulder", 18], ["Coral Boulder", 18], ["Marble Boulder", 18], ["Obsidian Boulder", 18], ["Bone Golem", 8], ["Pearl Golem", 8], ["Amethyst Golem", 8], ["Topaz Golem", 8],
    ["Ancient Monolith", 5], ["Viking Monolith", 5], ["Cosmic Monolith", 3], ["Earth Dragon", 5], ["Sky Dragon", 5], ["Sea Dragon", 5], ["Omega Dragon", 3], ["Origami Dragon", 3], ["Blaze Hydra", 3], ["Zombie Hydra", 3],
    ["Crystal Hydra", 3], ["NoLegs", 0], ["Natalie", 0], ["Anna", 0], ["Lance", 0], ["Chibi Knight", 0], ["Super Chibi Knight", 0], ["Ultra Chibi Knight", 4], ["Jotun", 8], ["Skadi", 4],
    ["Sól", 4], ["Neon Valkyrie", 0], ["Harpoon Turret", 0], ["Cannon Turret", 0], ["Laser Turret", 0], ["Nuclear Bomb", 0], ["Neon Valhalla", 0], ["Giga Harpoon", 0], ["Acid Bomb", 0], ["Earthquake Bomb", 0],

    ["Shockwave Bomb", 0], ["Laurelin", 4], ["Telperion", 3], ["Poseidon", 4], ["Vulcan", 3], ["Matteus", 3], ["Natalia", 3], ["Lancelot", 3], ["Annabelle", 3], ["God", 3],
    ["Cosmic Gigalith", 3], ["The Devourer", 3], ["Evil Eye", 0], ["Slimy Tentacle", 0], ["Spikey Tentacle", 0], ["Furry Slime", 70], ["King Slime", 7], ["Haunted Tree", 40], ["Eyeball", 35], ["Beholder", 5],
    ["Rock Eater", 24], ["Glacier Eater", 24], ["Giga Golem", 5], ["Red Bee", 45], ["Spikey Moth", 45], ["Sandworm", 5], ["Sandworm's Tail", 0], ["Gunslinger", 12], ["Swordslinger", 12], ["Jack", 4],
    ["Red Clay", 17], ["Blue Clay", 17], ["Dark Clay", 17], ["Light Clay", 17], ["Protector", 4], ["Florn", 0], ["Frose", 0], ["Stunflower", 0], ["Heasy", 0], ["Rafflesia", 4],
    ["Blue Crystal", 11], ["Red Crystal", 11], ["Praetorian", 3], ["GunKat-800XL", 5], ["Papalotl", 5], ["Xolotl", 5], ["Glaurung", 5], ["Green Pixel", 15], ["Dead Pixel", 15], ["Red Pixel", 15],

    ["Gray Pixel", 15], ["Snowflake", 2], ["BOSH", 8], ["ROBO", 7], ["GLOB", 7], ["SNEK", 8], ["PUMPKUS", 7], ["ANGRY CHAIR", 7], ["PHOENIX", 5], ["TREAGURE", 4],
    ["TOTOM", 6], ["GUOYE", 4], ["CORALIA", 3], ["THE MAW", 3], ["?0x00??FF45", 7], ["??.@'¬?]-?e??255", 4], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0]
    , ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0]
    , ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0]
    , ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0], ["None Selected", 0]
]

var curname = "None Selected";
var curbase = 0;
var curpage = 0;

function closeFoeSelect() {
    j = document.getElementById("foeSelectPg")
    j.remove();
}

function selectFoe(event) {
    im = event.target
    foeID = im.getAttribute("foeID");
    curname = Foes[foeID][0];
    curbase = Foes[foeID][1];;
    document.getElementById("monstername").textContent = curname;
    closeFoeSelect();
}

function openFoeSelect() {
    if (document.getElementById("foeSelectPg")) {
        closeFoeSelect();
    } else {
        var bigdiv = document.getElementById("foeSelect");
        var d = document.createElement("div");
        d.id = "foeSelectPg"
        bigdiv.appendChild(d)
        for (let i = 0; i < 50; i++) {
            if (50*curpage+i <= 215) {
                im = document.createElement("img");
                im.src = "imgs/foes/" + (50 * curpage + i) + ".png";
                im.addEventListener('click', selectFoe)
                im.setAttribute("foeID", (50 * curpage + i))
                d.appendChild(im);
                if (i % 10 == 9) { d.appendChild(document.createElement("br")) }
            }
        }
        if (curpage == 4) {
            d.appendChild(document.createElement("br"))
        }
        lbutton = document.createElement("button");
        lbutton.setAttribute("onClick", "{curpage--; closeFoeSelect(); openFoeSelect();}")
        lbutton.innerText = "<"
        rbutton = document.createElement("button");
        rbutton.setAttribute("onClick", "{curpage++; closeFoeSelect(); openFoeSelect();}")
        rbutton.innerText = ">"
        lbutton.disabled = (curpage == 0);
        rbutton.disabled = (curpage == 4);
        d.appendChild(lbutton);
        d.appendChild(rbutton);
    }
}



