
function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("L");
    console.log("L");
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(2,8)

//addTwoNumbers("2","8")

function subTwoNumbers(number1, number2){
    // let result = number1 - number2
    // return result
    return number1 - number2
}

const result = subTwoNumbers(9,5)
console.log("Result: ", result);

function loginUserMessage(username = "Mithu"){
    //if(username===undefined)
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Nill"));
console.log(loginUserMessage());  

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,600,999))

const user = {
    username: "Nill",
    price: "199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}
// handleObject({
//     username: "sam",
//     price: "599"
// })

handleObject(user)

const myArray = [200,500,499,100]
function secondIndexValue(getArray){
    return getArray[1]
}

console.log(secondIndexValue(myArray));