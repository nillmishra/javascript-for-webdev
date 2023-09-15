// primimtive (copy change) //call by value
// 7 types : string, number, boolean, null ,undefined , symbol, BigInt

//dyanmic type language
const score = 100
const scorevalue =100.4
const isLoggedIn = false
const  outSideTemp = null;
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 2322453465765435675n

//refrence type || Non Primiitive (call by refrence)

// array, objects, functions

const heros =["shaktiman", "nagraj", "dogz"];

let myObj = {
    name: "Nill",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World")
}
console.log(myFunction)
console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof anotherId)