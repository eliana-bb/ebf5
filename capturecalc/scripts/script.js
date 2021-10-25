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
    ["Angel Mirror", 32], ["Zombie Hand", 35], ["Magma Hand", 35], ["Skeleton Hand", 35], ["Burned Fallen", 13], ["Lost Fallen", 13], ["Crucified Fallen", 13], ["Drowned Fallen", 13], ["Beheaded Fallen", 13], ["Matt Doll", 23]
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
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 10; j++) {
                var newIm = document.createElement("img");
                newIm.src = "imgs/pg" + String(curpage + 1) + "/" + String(i) + "_" + String(j) + ".png";
                newIm.setAttribute("foeID", 50 * curpage + 10 * i + j)
                newIm.addEventListener('click', selectFoe)
                d.appendChild(newIm);
            }
            d.appendChild(document.createElement("br"));
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



