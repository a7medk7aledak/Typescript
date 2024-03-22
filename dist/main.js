"use strict";
let myData;
myData = 1000;
myData = +true;
let myInfo;
myInfo = 1000;
myInfo = true;
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
function yesOrNo(val) {
    return val > 10;
}
console.log(yesOrNo(30));
console.log(yesOrNo(8));
function isHeOld(age) {
    return (age > 40) ? "Yes" : "No";
}
console.log(isHeOld(45));
console.log(isHeOld(30));
let post;
post = [100, "Title", true];
post.push("Elzero");
const [id, title, state] = post;
console.log(id);
console.log(title);
console.log(state);
console.log(`----------------------------------------------------------------------------------`);
function getInsane(param) {
    return param -= Game.Hard;
}
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = getInsane(50)] = "Insane";
})(Game || (Game = {}));
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(Game.Insane);
//# sourceMappingURL=main.js.map