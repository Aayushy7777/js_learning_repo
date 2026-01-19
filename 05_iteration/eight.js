// const myNums = [1, 2, 3 , 4]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`Acc: ${acc} and CurrVal ${currval}`)
//     return acc + currval;


// }, 0)

// const myTotal = myNums.reduce((acc, reducer) => (acc+reducer), 0)   // smart code

// console.log(myTotal);

const ShoppingCart = [
    {
        itemName : "JsCourse",
        Price : 2999
    },
    {
        itemName : "MobileCourse",
        Price : 1999
    },
    {
        itemName : "DataScience",
        Price : 3999
    }
]

const PriceToPay = ShoppingCart.reduce((acc, item) => (acc+ item.Price), 0)
console.log(PriceToPay);