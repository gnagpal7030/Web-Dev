// Way to solve the problem of callback hell

// Example of the callback Hell
/*
The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”
*/

// console.log("Start");

// setTimeout(() => { console.log("I executed after 1s") }, 1000);

// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");

//       setTimeout(() => {
//         console.log("Step 4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// A Promise is a placeholder for a future value, representing the eventual completion (or failure) of an asynchronous operation.
// Example - Papa Cycle dilwayenge after the result ?

/*
States of a Promise:
Pending:	Initial state, neither fulfilled nor rejected
Fulfilled:	The operation completed successfully
Rejected:	The operation failed
*/

// Handling rejected promises - denotes that were some error

// Use Promises to resolve that
function step(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // wait for x time duration (in milliseconds) and then do the task
            console.log(message);
            resolve();
        }, 1000);
    });
}

// console.log("Start");

// step("Step 1")
//   .then(() => step("Step 2"))
//   .then(() => step("Step 3"))
//   .then(() => step("Step 4"))

// catch executes when the promise is rejected

// Using async and await
/*
async and await are JavaScript keywords that simplify working with promises, allowing asynchronous code to be written in a synchronous style. async declares a function that returns a promise, while await pauses execution until a promise resolves.
*/

// Below is function is implicitly returning a promise, even if we did not use return statement.

// async function runSteps() {
//   console.log("Start");
//   await step("Step 1");
//   await step("Step 2");
//   await step("Step 3");
//   await step("Step 4");
// }

// runSteps().then(() => console.log("All Promises are resolved"));

function rejectStep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //  reject() : does not mean that we are returning from here. only changes the state of a promise to rejected. That's why console is executing first.
            reject("Network Error");
            console.log("I am rejecting the promise due to some error");
        }, 1000);
    });
}

// rejectStep()
//   .then(() => {
//     console.log("Event completed");
//   })
//   .catch((err) => {
//     console.log("I have handled the error", err);
//   });

// another way to handle this
try {
    await rejectStep();
    console.log("I was resolved");
    // if resolved, then code here will be executed
} catch (err) {
    console.log("error in catch", err);
}