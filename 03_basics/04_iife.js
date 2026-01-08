// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();


// ()() first function second execution iife to avoid pollution from global scope


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('aayush');

// db connected two aayush