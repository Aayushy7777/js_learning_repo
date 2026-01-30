const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(" Async task 2");
        resolve()

    }, 1000)

}).then(function(){
    console.log("Async 2 resolved")
    
})

const promisThree = new Promise(function(resolve, reject){
    setTimeout( function(){
        resolve({username : "chai" , email : "chai@example.com" })


    }, 1000)
})

promisThree.then(function(user){
     console.log(user)
})




const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
           resolve({username : "Aayush" , password: 123 })
        }
        else{
            reject("something went wrong");

        }
    }, 1000);


})

PromiseFour
.then((user) => {
    console.log(user);
    return user.username

})
.then((username) => {
         console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("the promise is either accepted or rejected"))


const PromiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
    console.log(response);
     
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
    
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/aayushy7777')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

