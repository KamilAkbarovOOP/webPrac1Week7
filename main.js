//Amount
console.log("_____Amount______\n");
const getSum = (a, b) => {
    return (a + b).toFixed(1) ;
}

console.log(getSum(5, 3))
console.log(getSum(-11, 3))
console.log(getSum(0.2, 0.7))


//Square
console.log("_____Square______\n");

const isSquare = (a) => {
    if (Number.isInteger(Math.sqrt(a))){
        return true;
    }
    return false;
}
console.log(isSquare(9));
console.log(isSquare(8));




//Greeting
console.log("_____Greeting______\n");

const greeting = (name, surname, age) => {
    return `Hello, my name is ${name} ${surname} and I am ${age} years old.`
}

console.log(greeting('Jim', 'Power', 11));
console.log(greeting('Bill', 'Jacobson', 33));




//Min
console.log("_____Min______\n");

const getMin = (a, b ,c) =>{
    return Math.min(a, b, c);
}

console.log(getMin(5, 9, 7))
console.log(getMin(5, 0, -7))




//Even Odd checker
console.log("_____Even Odd checker______ \n");

const evenOrOdd = (a, b, c) => {
    sum = (a % 2) + (b % 2) + (c % 2)
    if(sum == 3){
        return "odd"
    }
    else if (sum == 0){
        return "even"
    }
    else{
        return "odd/even"
    }
}
console.log(evenOrOdd(1, 3, 11))
console.log(evenOrOdd(2, 4, 8))
console.log(evenOrOdd(2, 5, 8))



//Range
console.log("_____Range______\n");

const inOrOutRange = (x, y, num) => {
    if (num >= x && num <= y){
        return "In range";
    }
    return "Out of range"
}

console.log(inOrOutRange(5, 10, 8));
console.log(inOrOutRange(0, 6, 11));