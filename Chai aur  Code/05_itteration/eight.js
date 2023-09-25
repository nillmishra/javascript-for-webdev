//reduce

const myNum = [1,2,3]

const myTot = myNum.reduce(function (acc, curval) {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 0)
console.log(myTot);

const myTotal = myNum.reduce((acc, curval)=> acc + curval, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 1999
    }
]

const Total = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(Total);