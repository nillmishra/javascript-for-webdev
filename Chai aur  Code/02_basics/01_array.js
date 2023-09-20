//array

const myArray = [0,1,2,3,5,6]
console.log(myArray)
console.log(typeof myArray)
console.log(myArray[4])
const myHeros = ["saktiman", "shakal", "nagraj"]
console.log(myHeros)
console.log(myHeros.length)

//array methods 
myArray.push(7)
console.log(myArray)
console.log(myArray.length)
myArray.pop()
console.log(myArray)
myArray.unshift(9)
console.log(myArray)
myArray.shift() //0th index par value insert hoga
console.log(myArray)
console.log(myArray.includes(4))
console.log(myArray.indexOf(5))

const newArray = myArray.join()

console.log(myArray)
console.log(newArray)
console.log(typeof newArray)

//slice or splice 
console.log("A ", myArray)
const myn1 = myArray.slice(1,3)
console.log(myn1)
console.log("B ", myArray)

const myn2 = myArray.splice(1,3)
console.log("C ", myArray)

console.log(myn2)
