var c  = 300
let a = 300

if (true) {
    let a = 10
    const b = 20                            // scope
    // console.log("INNER: ", a)
}


// console.log(a);
// console.log(b);
// console.log(c);

/**************************************************** */

function one(){
    const username = "aayush"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
if (true){
    const username = "hitesh"
    if(username == "hitesh"){
        const website = "youtube"
        // console.log(website+username);

    }
    // console.log(website);
    

}
// console.log(username);

one()

/**************************************** */ //interesting



console.log(addone(5))

function addone(num){
    return num + 1;

}

addTwo(5)
const addTwo = function(num){            // we cant declare in this case
    return num + 2

}
