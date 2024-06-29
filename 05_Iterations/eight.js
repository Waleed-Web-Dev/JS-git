//Reduce

let arr1 = [1,2,3,4,6]

const ra = arr1.reduce( (acc, currval) => {
    console.log(`Acc: ${acc}, CurrVal: ${currval}`);
    
    return acc + currval
}, 0 );

// console.log(ra);

const cart = [
    {
        productName: "Js",
        Price : 499
    },
    {
        productName: "rust",
        Price : 2354
    },
    {
        productName: "c++",
        Price : 1099
    },
    {
        productName: "Java",
        Price : 804
    },
    {
        productName: "py",
        Price : 899
    },
];

const Total = cart.reduce((acc, proc) => (acc + proc.Price), 0);

// console.log(Total);