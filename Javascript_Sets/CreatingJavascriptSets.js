// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
function myFunction(a, b, c){
    const x = new Set()
    x.add(a)
    x.add(b)
    x.add(c)
    console.log(x)
return 
}

myFunction(1, 'b', 3) // Expected new Set([1, 'b', 3])
myFunction(NaN, null, false)// Expected new Set([NaN, null, false])
myFunction('a', ['b'], { c: 3 }) // Expected new Set(['a', ['b'], { c: 3 }])