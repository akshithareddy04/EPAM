// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
document.write(fruits[0]); // Output: Apple

// Adding an element to the end
fruits.push("Mango");
document.write(fruits); // Output: ["Apple", "Banana", "Cherry", "Mango"]

// Removing the last element
fruits.pop();
document.write(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Iterating through an array
fruits.forEach(fruit => document.write(fruit));

// Finding an element
document.write(fruits.includes("Banana")); // Output: true
