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
console.log(`----------------------------------------------------------------------------------`);
console.log(`------------------------------------------------------`);
let user = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
user.id = 200;
user.id = "200";
user.state = false;
console.log(`------------------------------------------------------`);
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
console.log(`------------------------------------------------------`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};
console.log(`------------------------------------------------------`);
class Player {
    constructor(n, t, l, vip) {
        this.n = n;
        this.t = t;
        this.l = l;
        this.vip = vip;
    }
    details() {
        if (this.vip)
            return `VIP ${this.n}, Type Is ${this.t} Level Is ${this.l}`;
        else
            return `${this.n}, Type Is ${this.t} Level Is ${this.l}`;
    }
}
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player2.details());
console.log(player3.details());
console.log(player4.details());
console.log(`------------------------------------------------------`);
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
class Show {
    get title_1() {
        return this._title;
    }
    set title_1(value) {
        this._title = value;
    }
    constructor(_title) {
        this._title = _title;
    }
}
let tester = new Show("Elzero");
console.log(tester.title_1);
tester.title_1 = "Osama";
console.log(tester.title_1);
console.log(`------------------------------------------------------`);
class Player2222 {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log(`Logged In`);
    }
    logOut(s) {
        console.log(`Logged Out, ${s}`);
    }
}
let player1 = new Player2222(100, "Elzero", 95);
console.log(player1.id);
console.log(player1.title);
console.log(player1.level);
player1.logIn();
player1.logOut("Good Bye");
console.log(`------------------------------------------------------`);
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(value) {
        console.log(`The Discount Is ${value}`);
    }
}
let gameOne = new Game("Ys", 100);
let gameTwo = new Game(2064, 100);
console.log(gameOne.title);
console.log(gameOne.price);
gameOne.getDiscount("50");
console.log(gameTwo.title);
console.log(gameTwo.price);
gameTwo.getDiscount(80);
//# sourceMappingURL=main.js.map