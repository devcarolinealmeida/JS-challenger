// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function myFunction (obj){
    console.log(obj.country)
return 
}

myFunction({ continent: 'Asia', country: 'Japan' }) // Expected 'Japan'
myFunction({ country: 'Sweden', continent: 'Europe' }) // Expected 'Sweden'