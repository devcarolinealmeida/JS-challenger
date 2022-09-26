// Write a function that takes an object as argument
// In some cases the object contains other objects with some deeply nested properties
// Return the property 'b' of object 'a' inside the original object if it exists
// If not, return undefined
function myFunction(obj){
    const value = obj?.a?.b;
    console.log(value)
}

myFunction({a:1}) // Expected undefined
myFunction({a:{b:{c:3}}}) // Expected {c:3}
myFunction({b:{a:1}}) // Expected undefined
myFunction({a:{b:2}}) //Expected 2

// To check if an object has a nested property, use the optional chaining operator ?. 
// The ?. operator allows you to read the value of a nested property without throwing an error if the property does not exist on the object, e.g. obj?.a?.b.

