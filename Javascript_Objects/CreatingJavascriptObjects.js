// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object
function myFunction(a){
    console.log(new Object( { key: a }))
return 
}

myFunction('a') // Expected {key:'a'}
myFunction('z') // Expected {key:'z'}
myFunction('b') // Expected {key:'b'}