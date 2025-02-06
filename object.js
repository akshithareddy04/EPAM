// Creating an object
let person = {
    name: "John",
    age: 25,
    city: "New York"
};

// Accessing properties
document.write(person.name); // Output: John

// Modifying properties
person.age = 26;
document.write(person.age); // Output: 26

// Adding a new property
person.country = "USA";
document.write(person); 

// Looping through an object
for (let key in person) {
    document.write(`${key}: ${person[key]}`);
}

// Checking if a property exists
document.write("city" in person); // Output: true
