//Map

let arr = [1,2,3,4,5,6,7,8,9,20];

let arr2 = arr
              .map( (num) => num*10  )
                   .map( (num) => num+1)
                        .filter( (num) => num > 100)
console.log(arr2);