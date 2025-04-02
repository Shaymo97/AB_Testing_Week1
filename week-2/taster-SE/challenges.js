// challengeFunctions.js

const reverseString = (str) => {
    return str.split("").reverse().join("")
  };
  
  const findLargest = (arr) => {
      let first_number = arr[0]
  
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] > first_number)
              first_number = arr[i]
  
      }
  
      return first_number
  }
  

//   **3) Problem - Count the Vowels**

// - Write a function that takes a string as input and returns the count of vowels `(a, e, i, o, u)` in the string.

const countVowels = (string) => {
    let vowels = ['a','e','i','o','u']
    let count = 0
    let stringArr = string.toLowerCase().split("")
    for (let y = 0; y < vowels.length; y++) {

        for (let i = 0; i < stringArr.length; i++){

            if(vowels[y] == stringArr[i]) {
                count++
            }
        }
    } return count
}

// **4) Problem - Remove Duplicates from an Array:**

// - Write a function that takes an array of integers as input and returns a new array with duplicates removed.

const removeDuplicates = (numbers) => {
    const newArr = []
    numbers.forEach(e => {
        if(!newArr.includes(e)) {
            newArr.push(e)
        }
    }) 
    return newArr
}


// **5) Problem - Sum of Array Elements**

// - Write a function that takes an array of numbers as input and returns the sum of all elements in the array.
const sumArray = (arr) => {
    let answer = 0
    arr.forEach(e => {
        answer += e
    })
    return answer
}

// **6) Problem - Check for Palindrome**

// - Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
const isPalindrome = (str) => {
    let reverse = str.split("").reverse().join("")
    return str === reverse
}

// **1) Problem - Fizzbuzz**

// - Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number; for multiples of 5, print "Buzz"; and for numbers which are multiples of both 3 and 5, print "FizzBuzz".
const fizzbuzz = (n) => {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
};

//  **2) Problem: Find the longest word**

// - Write a function that finds the longest word in a sentence.

const findLongestWord = (string) => {
    const stringArr = string.split(" ")
    let longest = 0
    let wordIndex = 0
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length > longest) {
            longest = stringArr[i].length
            wordIndex = i
        } 
    } return stringArr[wordIndex]
}

// **3) Problem: Two Sum**

// - Given an array of integers, return indices of the two numbers such that they add up to a specific target.



module.exports = {
    reverseString,
    findLargest,
    countVowels,
    removeDuplicates,
    sumArray,
    isPalindrome,
    fizzbuzz,
    findLongestWord,
    twoSum,
}
