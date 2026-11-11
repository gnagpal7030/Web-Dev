function sumNumbers(...arr) { // rest operator
    if (arr.length == 0) {
        console.log("You passed empty array")
        return
    }

    let sum = 0;
    arr.forEach((ele) => sum += ele);
    // console.log(sum);
}

sumNumbers(1, 2, 3);

let myArr = [5, 4, 3];
console.log(myArr);
sumNumbers(...myArr); // spread operator, it is becoming 5, 4, 3

/*
The spread operator and rest parameter both use the triple-dot syntax (...) introduced in ES6, but they perform opposite operations based on where they are placed in your code.
Spread Operator: Unpacks/expands a collection into individual elements.
Rest Parameter: Packs/condenses multiple individual elements into a single array.
*/