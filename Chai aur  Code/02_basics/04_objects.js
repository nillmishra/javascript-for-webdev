// const tinderUser =  new Object()
// console.log(tinderUser)

const tinderUser = {}
tinderUser.id = "dfg56854jhngj"
tinderUser.name = "Nill"
tinderUser.email = "nil@213"
tinderUser.isLoggedIn =  false

console.log(tinderUser)

const regularuser = {
    email: "nill@2234",
    fullname: {
        userfullname: {
            name: "Nill",
            surname: "Mishra"
        }
    }
}
console.log(regularuser)
console.log(regularuser.fullname.userfullname.surname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

//const objs = {obj1, obj2}
//const objs  = Object.assign({},obj1, obj2) //first wla target hota hai

const objs = {...obj1, ...obj2}
console.log(objs)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email


console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Nilla ticket",
    price: "999",
    courseInstructor: "Nill Mishra"
}

//new
const {courseInstructor : master} = course
console.log(master);

//apna kaaam kisi aur k sir p dalne ko api kehte hai

//json //api in object
// {
//     "name" : "Nill",
//     "coursename"  : "js in hindi",
//     "price" : "999"
// }

//api in array

[
    {},
    {},
    {}
]
// {
//     "username": "kristinward",
//     "sex": "F",
//     "address": "122 Powell Trace Suite 016, Lloydport, SC 08075",
//     "name": "Katherine Gill",
//     "email": "jestrada@gmail.com",
//     "birthday": "1958-04-05"
//   }

  //https://jsonformatter.org/
  //https://api-ninjas.com/api/randomuser