// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function myFunction(a, b){
    let itemArray = Object.entries(a)
    let multiply = 0
    let obj = {}
    for ([chave, valor] of itemArray) {
        multiply = valor * b
        obj[chave] = multiply}
        console.log(obj)
}


myFunction({a:1,b:2,c:3},3) // Expected {a:3,b:6,c:9}
myFunction({j:9,i:2,x:3,z:4},10) //Expected {j:90,i:20,x:30,z:40}
myFunction({w:15,x:22,y:13},6) //Expected {w:90,x:132,y:78}

// or
//function myFunction(a, b) {
//   return Object.entries(a).reduce((acc, [key, val]) => {
//      return { ...acc, [key]: val * b };
//     }, {});
//  }