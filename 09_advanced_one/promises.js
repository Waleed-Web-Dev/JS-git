// const promise1 = new Promise( (res,rej) => {
//   //any async code
//   //DB request, network request, file
  
//   setTimeout(() => {
//     console.log("First Promise")
//     res()
//   }, 1000);
// } );

// promise1.then( () => {
//   console.log("Promise consumed")
// } )


// new Promise( (res,rej) => {
//   setTimeout(() => {
//     console.log("promise 2")
//     res()
//   })
// }, 1000 ).then(() => {
//   console.log("2nd resolved");
// });

// const Promise3 = new Promise( (res,rej) => {
//   setTimeout(() => {
//     res({username: "waleed", password: 123})
//   }, 1000);
// } )

// Promise3.then( (user) => {
//   console.log(user)
//   console.log(user.username)
// })

// const Promise4 = new Promise((res,rej) => {
//   setTimeout(() => {
//     let error = true;
//     if(!error){
//       let data = {username:"js", password: "abc"}
//       res(data)
//     }else{
//       rej("ERROR FOUDN ")
//     }
//   }, 1000);
// })

// Promise4.then((data) => {
//   console.log(data)
//   return data.username
// }).then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.log(error)
// }).finally(() => {
//   console.log("Promise is either resolved or rejected")
// })


// const promise5 = new Promise((res,rej) => {
//   setTimeout(() => {
//     let error = true;
//     if(!error){
//       let data = {username:"js", password: "abc"}
//       res(data)
//     }else{
//       rej("ERROR FOUDN ")
//     }
//   }, 1000);
  
// });

// const fifthfunction = async () => {
//   try {
//     let resp = await promise5
//     console.log(resp )
//   } catch (error) {
//     console.log(error);
//   }
// }

// fifthfunction()

// const getUser = async () => {
//   try {
    
//  let reqUrl = await fetch('https://api.github.com/users/hiteshchoudhary');
//  let data = await reqUrl.json()
//  console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// getUser()


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((data) => {
//   return data.json()
// })
// .then(data => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(error)
// })




// const user = async () => {
//   try {
//     let data = await fetch('api.github.com/users/hiteshchoudhary');
//     let res = await data.json()
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// user()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((data) =>{
  return data.json()
 
}).then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
})