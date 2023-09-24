const user = {
    username: "nillmishra",
    price: "999",
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    } 
}//this ---->> current context //dabba

user.welcomeMessage()
user.username= "samsingh"
user.welcomeMessage()


console.log(this); //global is empty

// function chai(){
//     let username ="Nill"
//     console.log(this.username);
// } //undefined
// chai()


// const chai =function(){
//     let username = "Nill"
//     console.log(this.username);
// }

//arrow function
const chai = () => {
    let username = "Nill"
    console.log(this.username);
}

//chai()

// 

//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Nill"})
console.log(addTwo(3,4));

const myArray = [2,5,7,9,6,8]

//myArray.forEach(() => ())