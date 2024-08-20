
// Day 23

// ### Question 1: Calculate the Factorial of a Number
// Task: Write a function calculateFactorial that takes a number as input and returns its factorial.

// Hint: Factorial means multiplying a number by all positive integers less than it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function calculateFactorial(num: number): number{
    let res = 1;
    for(let i=num; i>= 1; i--){
    res *= i;
}
return res;
}
console.log(calculateFactorial(5)); //output 5 * 4 * 3 * 2 * 1 = 120.
console.log(calculateFactorial(6));  //output 6 * 5 * 4 * 3 * 2 * 1 = 720 

// ### Question 2: Convert a Number to Binary (Without Using Built-in Functions)
// Task: Write a function convertToBinary that takes a number as input and converts it into its binary form.

// Hint: Repeatedly divide the number by 2 and note down the remainder. Join the remainders in reverse order to get the binary representation.

function convertToBinary(num: number):string{
    if(num === 0) return "0";

    let binary = "";
    while (num > 0){
        let reminder = num % 2;
        binary = reminder + binary
        num = Math.floor(num/2);
    }
    return binary;
}
console.log(convertToBinary(13));  // Output: "1101"
console.log(convertToBinary(10));  // Ouput : "1010"








