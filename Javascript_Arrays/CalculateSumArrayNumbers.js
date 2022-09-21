// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(a) {
   console.log(a.reduce((prev,curr) => prev + curr)) 
}


myFunction([10,100,40]) // Expected 150
myFunction([10,100,1000,1]) // Expected 1111
myFunction([-50,0,50,200]) // Expected 200