
// Js array can be a group of different types - heterogenous 
let subjects = ["Js", "Node", true, 2, 2.90];

// for(let i = 0; i < subjects.length; i++){
// console.log(subjects[i]);
//}

// forEach accepts a callback, which will be applied to all the elements of the array
subjects.forEach((element) => {
  console.log(element);
});

// length of the array - subjects.length

// Object: Group of key value pairs 
let student = {
  Name: "A",
  Age: 23,
};

// let keyName = "Name";
// console.log(student.Name); // A

// array of objects
let students = [
  {
    Name: "Krrish",
    Age: 20,
  },
  {
    Name: "Sawan",
    Age: 21,
  },
  {
    Name: "Arpit",
    Age: 22,
  },
];

// students[2].Name.length; // 5

let displayInfo = (student) => {
  console.log("---------------");
  console.log(
    `Name of the student is ${student.Name} and age is ${student.Age}`
  );
};

students.forEach(displayInfo);

// TODO: Print the sum of every element in the array

// TODO: How to access the last element of the array ?

// TODO: Print Odd numbers in 2D array

// adding a new element in end of the array
students.push({ Name: "Kavya", Age: 19 });

students.forEach(displayInfo);

// remove and return last element from the array
let deletedStudent = students.pop();
console.log(deletedStudent);

// remove and return the first element of the array
console.log(students.shift());

// add the element in the start of the array
students.unshift({ Name: "Rohit", Age: 18 });

students.forEach(displayInfo);

// iterating over the object
let specialStudent = {
  Name: "Hamza",
  Age: 15,
  Address: "Pakistan",
};

// specialStudent.Name; 
for (let key in specialStudent) {
  console.log("Key Name", key);
  console.log(specialStudent[key]);
}

// optional chaining - 
let detailedInfo = {
  Name: "Major Iqbal",
  Address: {
    // Contact: { // null from server
    //   Phone: "123",
    //   Landline: "000",
    // },
    Colony: "Lyari",
    District: "Karachi",
    State: "Pakistan",
  },
};

console.log(detailedInfo.Address?.Contact?.Phone); // remove ? and remove Contact from above and see the error

/*
If the value exists (is not null or undefined), the access or call proceeds as normal.
If the value is null or undefined, the expression immediately short-circuits and the entire expression evaluates to undefined, preventing a TypeError
*/