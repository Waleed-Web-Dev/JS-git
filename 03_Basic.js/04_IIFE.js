//IIFE: Immediately Invoked Function Exevution

// Named IIFE:
    (function me(){
        console.log("DATABASE CONNECTED");
    })();
//When  writing two IIFE in one file dont forget to place semicolon at end because compiler doesnot when 
// when to stop executing
// Simple IIFE:
((I) => {
    console.log(`DATABASE CONNECTED TWO ${I}`)
})('WA')   