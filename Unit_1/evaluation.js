/*
? Say Hello

You are given a variable name with the name, 'name' containing the nme of the person. You have to print the name of the person as the output along will 'Hello'. 

For example, the value stored in name = Mohsin, then the required output will be 'Hello Mohsin'

Input: Mohsin
Output: Hello Mohsin
*/

const name = 'Mohsin'

console.log(`Hello ${name}`)


/*
? Power of 4

You are given a number stored in a variable with the name 'nums'. You have to find the power of 4, equals 3 * 3 * 3 * 3 = 81, which is the required answer. Therefore, the output is 81.

Input: 3
Outpit: 81
*/

const num = 3;

console.log(num ** 4)

/*
? Sum Two Equations

You are given two numbers, stored in a variable with the names, x and y. You have to find the sum of x and y, such that 
x = (x * 5) + (y * 3)
y = (x * 7) + (y * 4)

Input: 2 3
Outpit: 45
*/

const [x, y] = [2, 3]

console.log(((x * 5) + (y * 3)) + ((x * 7) + (y * 4)))


/*
? Logical And

You are given two numbers stored in variables with the name X and Y. Print the result of the following operation: X > 15 && Y > 20

Input: 16 21
Ouput: true
*/

const [X, Y] = [16, 21]

console.log(X > 15 && Y > 20)


/*
? Divisible by 5

You are given a number stored in the variable with the name Num. If the value is divisible by 5, print 'Yes', else print 'No'.

Input: 45
Output: Yes
*/


const Num = 45;

console.log(Num % 5 === 0 ? 'Yes' : 'No');


/*
? Range of 2

You are given two numbers stored in the variable with the names 'left' and 'right' respectively. You have to print all the numbers in the range of [left, right] including the value stored in left and right such that the current number is double of the previous number.

For example, consider the value stored in left = 2, and the calue stored in right = 10, then the required output will be '2 4 8'.

Note: Print the output on every new line.

Input: 4 10
Output: 4
8
*/


const [left, right] = [8, 32]

for (let i = left; i <= right; i *= 2){
    console.log(i)
}


/*
? Second Maximum

You are given three numbers stored in the variables with the following names: a, b, c. You have to find the second largest number out of a, b, c. 

For example, consider the value stored in a = 3, b = 7, c = 5, then the required output will be c = 5.

Input: 3 7 5
Output: 5
*/

const [a, b, c] = [3, 7, 5]

console.log(((a > b || a > c) && (a < b || a < c)) ? a : ((b > c || b > a) && (b < c || b < a)) ? b : c);


/*
? Dots and Dashes

You are given a number stored in a variable with the name N. Print the required pattern, such that for all numbers in the range [1, N] including N, if the number is odd, print a single dash(_), else print N starts(*) without space on a new line.

Input: 5
Output:
_
******
_
******
_
*/


const dots_and_dashes = (N) => {
    for (let i = 1; i <= N; i++) { 
        let res = ''
        if (i % 2 === 1) {
                res = '_'
        } else {
            for (let j = 1; j <= N; j++){
                res+='*'
            }
        }
        console.log(res)
    }
}

dots_and_dashes(5)



/*
? Dots and Dashes ||

You are given a number stored in a variable with the name N. Print the required pattern, such that for all numbers in the range [1, N] including N, if the number is odd, print a N dashes(_), else print N starts(*) without space on a new line.

Input: 5
Output:
_____
******
_____
******
_
*/

const dots_and_dashesII = (N) => {
    for (let i = 1; i <= N; i++) { 
        let res = ''
            for (let j = 1; j <= N; j++){
                if (i % 2 == 1) {
                    res+= '_'
                } else {
                    res+='*'
                }
            }
        console.log(res)
    }
}

dots_and_dashesII(5)


/*
? Pattern of Inverted L

You are given a  number stored in a variable with the name, N. Print the pattern as shown below, according to the value in N.

For example, consider the value stored in N = 5. Then, the required output will be:

* * * * *
*
*
*
*

*/

const invertedL = (N) => {
    for (let i = 0; i < N; i++){
        let res = ''
        for (let j = 0; j < N; j++){
            if (j === 0 || i === 0) {
                res+='* '
            }
        }
        console.log(res)
    }
}

invertedL(5)


/*
? Reverse the value

You are given a number stored in a variable with the num and you have to reverse that number.

For example, the number stored in the variable num = 971, then the required output will be 179.

Note: The number does not contain the leading zeros
*/

const Num1 = 971;

console.log(Num1.toString().split('').reverse().join(''))


/*
? Two Primes

You are given two numbers, stored in variables with the following names a, b. If both the numbers are prime, print 'True' else print 'False'.


Input: 11 17
Output: true
*/


const [a1, b1] = [11, 17]


const primeNumber = (n) => {
    if (n < 10) {
      if (n === 2 || n === 3 || n === 5 || n === 7) {
        return true;
      }
        return false;
    } else {
      if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
        return false;
      }
      return true;
    }
};
  
console.log(primeNumber(a1) && primeNumber(b1) ? 'True' : 'False')
