// challengeFunctions.test.js
const each = require('jest-each').default;
const {
  reverseString,
  findLargest,
  countVowels,
  removeDuplicates,
  sumArray,
  isPalindrome,
  fizzbuzz,
  findLongestWord,
  twoSum,
  findSecondLargest,
  checkEvenOdd,
  factorial,
  findMissingNumber,
  mergeSortedArrays,
  replaceChar,
  findPairsWithSum,
  isAnagram,
  pyramidPattern,
  combinationSum,
  canJump,
  lengthOfLongestSubstring
} = require('./challenges.js');

// Warm-up Tests
describe("reverseString", () => {
  it("Exists", () => expect(reverseString).toBeDefined());
  it("Is a function", () => expect(typeof reverseString).toBe("function"));
  it("Reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("a")).toBe("a");
  });
});

describe("findLargest", () => {
  it("Exists", () => expect(findLargest).toBeDefined());
  it("Is a function", () => expect(typeof findLargest).toBe("function"));
  it("Finds the largest number in an array", () => {
    expect(findLargest([1, 6, 3, 4, 5])).toBe(6);
    expect(findLargest([-10, -20, -3])).toBe(-3);
    expect(findLargest([100])).toBe(100);
  });
});

describe("countVowels", () => {
  it("Exists", () => expect(countVowels).toBeDefined());
  it("Is a function", () => expect(typeof countVowels).toBe("function"));
  it("Counts vowels in a string", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("rhythm")).toBe(0);
    expect(countVowels("aeiouAEIOU")).toBe(10);
  });
});

describe("removeDuplicates", () => {
  it("Exists", () => expect(removeDuplicates).toBeDefined());
  it("Is a function", () => expect(typeof removeDuplicates).toBe("function"));
  it("Removes duplicates from an array", () => {
    expect(removeDuplicates([1, 2, 2, 4, 5, 10, 10, 11])).toEqual([1, 2, 4, 5, 10, 11]);
    expect(removeDuplicates([1, 1, 1])).toEqual([1]);
    expect(removeDuplicates([])).toEqual([]);
  });
});

describe("sumArray", () => {
  it("Exists", () => expect(sumArray).toBeDefined());
  it("Is a function", () => expect(typeof sumArray).toBe("function"));
  it("Sums elements in an array", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArray([10, -5, 5])).toBe(10);
    expect(sumArray([])).toBe(0);
  });
});

describe("isPalindrome", () => {
  it("Exists", () => expect(isPalindrome).toBeDefined());
  it("Is a function", () => expect(typeof isPalindrome).toBe("function"));
  it("Checks if a string is a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("a")).toBe(true);
  });
});

