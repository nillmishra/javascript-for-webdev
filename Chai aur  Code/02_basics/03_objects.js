//singleton
//constructor
//Object.create 


//object literals
mySym = Symbol("key1")
const JsUser = {
    //key defined
    name: "Nill",
    "full name": "Nillotpal Mishra",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "nillmishra09@gmail.com",
    isLOgggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}



console.log(JsUser.name) 
console.log(JsUser["email"]) 
console.log(JsUser.name) 
console.log(JsUser["full name"]) 
console.log(JsUser[mySym]) 
console.log(typeof JsUser.mySym) 
const myArr = ["H","i"]

JsUser.email = "inillmishra@gmail.com"
console.log(JsUser["email"]) 
//Object.freeze(JsUser)

JsUser.name = "Chilla"

console.log(JsUser) 

JsUser.greeting =  function(){
    console.log("Hello Js user")
}
JsUser.greeting2 =  function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())