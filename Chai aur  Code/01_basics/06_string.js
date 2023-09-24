const name = "Nill"
const repoCount = 50

console.log(name + repoCount + " Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String('Nillotpal-mis-hra')

console.log(gameName[7])
console.log(gameName.length)
console.log(gameName.__proto__);
console.log(gameName.toUpperCase()) //capital
console.log(gameName.charAt(0)) //to find alphabet index   
console.log(gameName.indexOf('o')) //to find index of alphabet 

const newString = gameName.slice(0,4)
console.log(newString)

const anotherString = gameName.slice(-9, 7)
console.log(anotherString)

const newStringOne = "     hitesh      "
console.log(newStringOne.trim());

const url = "https://www.jiocinema.com/"
console.log(url.replace('jio', 'pio'))
console.log(url.includes('cinema'))

console.log(gameName.split('-'))