// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

function myFunction(set, val){
    console.log(set.has(val))
    return 
}

myFunction(new Set([1, 2, 3]), 2) // Expected true
myFunction(new Set([123]), 2) // Expected false
myFunction(new Set(['1', '2', '3']), '2') // Expected true
myFunction(new Set('123'), '2') // Expected true