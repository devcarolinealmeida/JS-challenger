// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b){
    const difference = Math.abs(a - b);
    console.log(difference / (1000 * 60 * 60 * 24))
return 
}


myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
// Expected 10
myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
//Expected 7457