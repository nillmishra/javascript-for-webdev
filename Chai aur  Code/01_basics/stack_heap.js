 //============================================================

 // Stack (Primitive) // copy change
 //Heap (Non Primitive ) //original change

 let myRealName ="Nillotpal Mishra" //stack 

 let anotherName = myRealName

 console.log(anotherName)

 anotherName = "Nill Mishra"

 console.log(anotherName)

 console.log(myRealName)

 let user1 = {
    name: "Nill",
    age: 19,
}

let user2 = user1

user2.age = 22

//both value got changed

console.log(user1)

console.log(user2)

 