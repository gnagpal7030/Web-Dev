/*
Hoisting is a JavaScript mechanism where variable, function, and class declarations are allocated memory during the compile phase, making them accessible before they are formally declared in the code.Crucially, only declarations are hoisted, not initializations or assignments.
*/

/*
var HoistingVariables declared with var are hoisted to the top of their global or function scope and are immediately initialized with a default value of undefined. You can reference them before their declaration line without getting an error.
*/

console.log(greeting); // Outputs: undefined
var greeting = "Hello World";
console.log(greeting); // Outputs: "Hello World"

/*
Variables declared with let and const are hoisted, but they are not initialized with any value. Instead, they enter the Temporal Dead Zone (TDZ). This is the phase between entering a block scope and the actual line where the variable is declared. Accessing them early triggers a ReferenceError.

// TDZ begins here (at the start of the block)
// console.log(myVar); // ReferenceError!

let myVar = 10; // TDZ ends here (the variable is initialized)

console.log(myVar); // Output: 10
*/

console.log(age); //  ReferenceError: Cannot access 'age' before initialization
let age = 25;

/*
Best Practices to Avoid Hoisting BugsAvoid using var: 
Stick exclusively to let and const to enforce strict block scoping and catch uninitialized accesses early.

Declare variables at the top: Explicitly declare your variables and functions at the top of their respective scopes to ensure readability.

Use Strict Mode: Enabling "use strict"; at the top of your scripts prevents unintended global variable assignments and enforces cleaner coding patterns.
*/