// Write Your Code Here
type n = number;
// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here



// Write Your Code Here
type mix = number | boolean;
// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here


// Write Your Code Here
type Info = {
  theName:string;
  theAge : number;
};

type Full = Info & {
  country : string;
};
// Do Not Edit Here
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

//-----------------------------------------------------------------------------------
function yesOrNo(val: number) {
  return val > 10;
}

// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False

//--------------------------------------------------------------------------------------------
type custom = "Yes" | "No"
function isHeOld(age: number) : custom {
  return (age > 40) ? "Yes" : "No";
}

// Do Not Edit Here
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"

//------------------------------------------------------------------------------------------
let post: [number , string , boolean];
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
const [id,title,state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
console.log(`----------------------------------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------
// Create Enums + Function Here
// function getInsane(param:number) {
//   // return param -=Game.Hard;
// }
// enum Game {
//   Easy= 100,
//   Medium= Easy - 20 , // 80
//   Hard= Medium-(Easy/2), //30
//   Insane = getInsane(50),
// }
// Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20
console.log(`----------------------------------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------
// const user: {
//   username: string,
//   age: number | string,
//   website?: string,
//   skills: {
//     frontEnd: string[],
//     backEnd: (string |number) []
//   }
// } = {
//   username: "Elzero",
//   age: 40,
//   website: "Elzero.org",
//   skills: {
//     frontEnd: ["HTML", "CSS", "JS"],
//     backEnd: ["PHP", "Python"]
//   }
// }

// // We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);


console.log(`------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------
// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getName():string;
}
// Do Not Edit The Code Below
let user: Member = { // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() { // 'getName' does not exist in type 'Member'
    return this.username;
  }
}
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property

console.log(`------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------

// Create Interface Here
interface Client {
  id:number,
  username: string,
  active: boolean,
  discount: number,
  getPrice(num:number) :number
}
// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

console.log(`------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------
// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}
interface Superman extends Man,Bird {
  bodyType: string,
  origin : string
}
let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}
console.log(`------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------
// Create Class Here
class Player {
  constructor(private n:string, private t:string,private l:number|string, private vip?:boolean) {
    
  }
  details() {
    if(this.vip)
      return`VIP ${this.n}, Type Is ${this.t} Level Is ${this.l}`
    else
      return`${this.n}, Type Is ${this.t} Level Is ${this.l}`
  }
}
// Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

console.log(`------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------

class Shorten {
  constructor (public id: number,public username: string,protected title: string) {
  }
}

// let tester = new Shorten(100, "Elzero", "Developer");

// console.log(tester.id);
// console.log(tester.username);
//--------------------------------------------------------------------------------------
class Show {
  public get title_1(): string {
    return this._title;
  }
  public set title_1(value: string) {
    this._title = value;
  }
  constructor (private _title: string) {}
}

let tester = new Show("Elzero");

console.log(tester.title_1); // Property 'title' does not exist on type 'Show'
tester.title_1 = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester.title_1); // Property 'title' does not exist on type 'Show'

console.log(`------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------
interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Player2222 {
  constructor(public id: number,public title:string,public level:number|string) {}
    logIn(): void {
      console.log(`Logged In`)
    }
        logOut(s:string): void {
      console.log(`Logged Out, ${s}`)
    }
}
let player1 = new Player2222(100, "Elzero", 95);

console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye


console.log(`------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------
// Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }

// // Start Edit And Fix
// class RPG extends Game {
//   constructor(title: string,price: numandstring,public rate: number) {
//     super(title, price);
//   }
//   getDiscount(): string {
//     return `Discount`;
//   }
//   getLocation():string {
//     return `Location`;
//   }
// }

// class Action extends Game {
//   constructor(title: string, price: numandstring, public rate: number,public company:string) {
//         super(title, price);
//   }
//     getDiscount(): string {
//     return `Discount`;
//   }
//   getLocation():string {
//     return `Location`;
//   }
// }
// // End Edit And Fix

// // Do Not Edit
// // let gameOne = new RPG("Ys", 100, 10);
// // let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"
// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"

// console.log(`------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------
// // Write Function Code Here
// function showTypes<T,s,b>(...value: T[]): T[] {
//     console.log(...value);
//     return value;
// }
// // Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// Write Class Code Here
class Game <T> {
  constructor(public title:T,public price:number){
  }
  getDiscount(value:T) {
    console.log(  `The Discount Is ${value}`)
  }
}
// Do Not Edit Here
let gameOne = new Game<string>("Ys", 100);
let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"

console.log(`------------------------------------------------------`); 
//-------------------------------------------------------------------------------------------
// // Write Function Code Here
// function showTypes<T,s,b>(...value: T[]): T[] {
//     console.log(...value);
//     return value;
// }
// // Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true