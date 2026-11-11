// classes and methods

class Student {
  // Name;
  // Age;
  constructor(Name, Age) {
    this.Name = Name;
    this.Age = Age;
  }

  printInfo() {
    console.log(`Name: ${this.Name}`);
    console.log(`Age: ${this.Age}`);
  }
}

let studentKrrish = new Student("Krrish", 20);
let studentDhruv = new Student("Dhruv", 30);

studentKrrish.printInfo();
studentDhruv.printInfo();
