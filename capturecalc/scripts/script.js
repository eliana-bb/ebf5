const Foes = [
    [
        [
            {foename: "Chocolate Slime", base: 90}, {foename: "Sand Slime", base: 90}, {foename: "Icecream Slime", base: 90}, {foename: "Lava Slime", base: 90}, {foename: "Mud Slime", base: 90}, {foename: "Water Slime", base: 90}, {foename: "Slime Bunny", base: 90}, {foename: "Slime Mouse", base: 90}, {foename: "Big Chocolate Slime", base: 7}, {foename: "Big Sand Slime", base: 7} 
        ],[
            {foename: "Big Icecream Slime", base: 7}, {foename: "Big Mud Slime", base: 7} 
        ],[],[],[]
    ],
    []
]; // form of Foes[page][row][col]

function openFoeSelect() {
    var d = document.getElementById("foeSelect");
    if (d.style.display === "none") {
        d.style.display = "block";
    } else {
        d.style.display = "none";
    }
}