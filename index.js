// let first_Name1: string = "Rashan";
// let first_Name = "Dylan"; // type string
// first_Name = 33; // attempts to re-assign the value to a different type
// console.log(firstName);
// // Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
// const json = JSON.parse("55");
// // Most expect json to be an object, but it can be a string or a number like this example
// console.log(typeof json);
// let u: any = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u);
// const array: string[] = [];
// array.push("34");
// const array: readonly string[] = [];
// array.push("34");
// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4); // no error
// // comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push(2); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head = numbers[0]; // no error
