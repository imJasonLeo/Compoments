
// Name function with parameters
function sum(a, b){
    return a + b
}

// Can remove the brackets and the return statement
let sum2 = (a,b) => a + b




// Named function with one parameter
function isPositive(number){
    return number >= 0
}

// Can remove the parameter parentheses 
let isPositive2 = number => number >= 0





// Named function no parameters
function randomNumber(){
    return Math.random
}

let randomNumber2 = () => Math.random


// THE REAL USE CASE
// Anonymous Function
document.addEventListener('click', function() {
    console.log('Click')
})

document.addEventListener('click', () => {
    console.log('Click')
})

document.addEventListener('click', () => console.log('Click'))



//ARROW FUNCTIONS USE THE THIS KEYWORD VERY DIFFERENTLY
// In a regular function the THIS keyword is based on where the function is called, so if you have a variable in a class and call the function outside of the class THIS will refer to where the fuction is called not from the class in which it belongs

stopButton.onclick = () => {
    
}