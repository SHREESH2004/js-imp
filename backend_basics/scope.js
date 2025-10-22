//scorpe: created variables and fcntion can be used in what classes or functions

function abcd(){
    var a = 10; // function scope
}
console.log(a); // error: a is not defined

//scope 3 types: function scope, block scope, global scope
//function scope: variables declared inside a function are not accessible outside the function
//block scope: variables declared inside a block (e.g., inside curly braces {}) are not accessible outside the block
//global scope: variables declared outside any function or block are accessible everywhere in the code


//Execution context: 
/*The environment in which JavaScript code is executed, including the scope chain and variable object.
js make 1 process whenever sees a fns it creates a new execution context, it is 
process that works in 2 phases: creation/memory phase and execution phase
C:\Users\Shreesh\OneDrive\Desktop
*/