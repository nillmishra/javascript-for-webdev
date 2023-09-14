//let age = "56" => 56
//let age = "56abc" => NaN
//let age = null //=> 0
//let age = undefined //=> NaN
//let age = true //=> 0
let age = false //=> 1
console.log(typeof age)

let valueInNumber = Number(age)
console.log(typeof valueInNumber)
console.log(valueInNumber)
 
//let isLoggedIn = 1 //=> true
//let isLoggedIn = 0 //=> false
//let isLoggedIn = "Hitesh" //=> true
let isLoggedIn = "" //=> false
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)