//dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDay = new Date(2023, 0, 23)
//let myCreatedDay = new Date(2023, 0, 23, 5, 3)
//let myCreatedDay = new Date("2023-01-14")
let myCreatedDay = new Date("01-14-2023")
console.log(myCreatedDay.toLocaleString())

let myTimeStamp = Date.now()
//console.log(myTimeStamp)
//console.log(myCreatedDay.getTime())
//console.log(myCreatedDay.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())


newDate.toLocaleString('default',{
    weekday: "long",
})