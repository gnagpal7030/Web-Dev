// Destructuring of arrays and objects with spread operator. 

/*
Destructuring Assignment: a syntax that makes it possible to unpack values from arrays or properties from objects into distinct variables in a single, concise statement
*/

// Array destructuring : unpacks values based on their position (index) within the array.

const DBNames = ["MongoDB", "Redis", "MySQL"];

let [mongoDB, redis, mySQL] = DBNames;

// console.log(mySQL); // MySQL 

// skipping the values 
let [mongoDBNew, ,] = DBNames;
console.log(mongoDBNew);

// Using rest operator
let [firstValue, ...restDBs] = DBNames;
// console.log(restDBs);

// Object Destructuring : Object destructuring unpacks properties by their key names.
const person = {
    name: "Faizal",
    age: "24",
    location: "WasseyPur",
};

// new variable name 
const { name: myName, age } = person;
// console.log(myName);
// console.log(age);

// using rest operator 
const { name, ...restFields } = person;
console.log(restFields);