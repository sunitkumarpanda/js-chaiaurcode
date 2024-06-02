// primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 24983478271823653247n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Sunit",
    age: "19",
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "sunitkumarpanda"

let anothername = myYoutubename
anothername = "rajib"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sunit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);