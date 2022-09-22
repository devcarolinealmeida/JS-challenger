// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
function myFunction (a, b){
    console.log(Object.hasOwn(a,b))
}

myFunction({a:1,b:2,c:3},'b') // Expected true
myFunction({x:'a',y:'b',z:'c'},'a') // Expected false
myFunction({x:'a',y:'b',z:undefined},'z') // Expected true

//O método estático Object.hasOwn() retorna true se o objeto específicado tem a propriedade indicada como sua propriedade own. Se a propriedade é herdada, ou não existe, o método retorna false.