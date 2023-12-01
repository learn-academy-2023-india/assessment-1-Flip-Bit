// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "banana"

const whichStringIsLonger = (string1, string2) => {
    if(string1.length > string2.length){
        return string1
    } else {
        return string2
    }
}
console.log(whichStringIsLonger(fruit1, fruit2))
console.log(whichStringIsLonger(fruit3, fruit4))
// Set two:

// Expected outcome: "cherry"

// Pseudo code:
//Input: 2 strings
//Output: Longer of the two strings
//Eval length
//Compare length, return largest


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// combine both arrays

const combinedArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

// spit out the shared length
console.log(combinedArray.length)


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
//convert the string to an array
const Array = currentCohort.split("")
//reverse the array
for (let i = 0; i < Array.length / 2; i++){
    [Array[i], Array[Array.length -1 -i]] = [Array[Array.length -1 - i], Array[i]]
}

//Rejoin the array as a string
const currentCohortReverse = Array.join("")


console.log(currentCohortReverse)

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:

//Check if the number is odd
for(let i = 0; i < stockExchange.length; i++){
    if(stockExchange[i] % 2 !==0){
//console log all odd numbers        
        console.log(stockExchange[i])
    }
}

//Spit out only odd numbers