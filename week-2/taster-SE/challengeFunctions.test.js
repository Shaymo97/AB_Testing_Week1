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
xdescribe("reverseString", () => {
  it("Exists", () => expect(reverseString).toBeDefined());
  it("Is a function", () => expect(typeof reverseString).toBe("function"));
  it("Reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("a")).toBe("a");
  });
});

xdescribe("findLargest", () => {
  it("Exists", () => expect(findLargest).toBeDefined());
  it("Is a function", () => expect(typeof findLargest).toBe("function"));
  it("Finds the largest number in an array", () => {
    expect(findLargest([1, 6, 3, 4, 5])).toBe(6);
    expect(findLargest([-10, -20, -3])).toBe(-3);
    expect(findLargest([100])).toBe(100);
  });
});

xdescribe("countVowels", () => {
  it("Exists", () => expect(countVowels).toBeDefined());
  it("Is a function", () => expect(typeof countVowels).toBe("function"));
  it("Counts vowels in a string", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("rhythm")).toBe(0);
    expect(countVowels("aeiouAEIOU")).toBe(10);
  });
});

xdescribe("removeDuplicates", () => {
  it("Exists", () => expect(removeDuplicates).toBeDefined());
  it("Is a function", () => expect(typeof removeDuplicates).toBe("function"));
  it("Removes duplicates from an array", () => {
    expect(removeDuplicates([1, 2, 2, 4, 5, 10, 10, 11])).toEqual([1, 2, 4, 5, 10, 11]);
    expect(removeDuplicates([1, 1, 1])).toEqual([1]);
    expect(removeDuplicates([])).toEqual([]);
  });
});

xdescribe("sumArray", () => {
  it("Exists", () => expect(sumArray).toBeDefined());
  it("Is a function", () => expect(typeof sumArray).toBe("function"));
  it("Sums elements in an array", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArray([10, -5, 5])).toBe(10);
    expect(sumArray([])).toBe(0);
  });
});

xdescribe("isPalindrome", () => {
  it("Exists", () => expect(isPalindrome).toBeDefined());
  it("Is a function", () => expect(typeof isPalindrome).toBe("function"));
  it("Checks if a string is a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("a")).toBe(true);
  });
});

describe("fizzbuzz", () => {
  it("Exists", () => expect(fizzbuzz).toBeDefined());
  it("Is a function", () => expect(typeof fizzbuzz).toBe("function"));
  it("Returns correct FizzBuzz sequence", () => {
    expect(fizzbuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
  });
});

describe("findLongestWord", () => {
  it("Exists", () => expect(findLongestWord).toBeDefined());
  it("Is a function", () => expect(typeof findLongestWord).toBe("function"));
  it("Finds the longest word in a sentence", () => {
    expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe("quick");
    expect(findLongestWord("Hello world")).toBe("Hello");
    expect(findLongestWord("a")).toBe("a");
  });
});

describe("twoSum", () => {
  it("Exists", () => expect(twoSum).toBeDefined());
  it("Is a function", () => expect(typeof twoSum).toBe("function"));
  it("Finds two indices that sum to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});

xdescribe("findSecondLargest", () => {
  it("Exists", () => expect(findSecondLargest).toBeDefined());
  it("Is a function", () => expect(typeof findSecondLargest).toBe("function"));
  it("Finds the second largest number in an array", () => {
    expect(findSecondLargest([1, 6, 3, 4, 5])).toBe(5);
    expect(findSecondLargest([10, 20, 30, 40])).toBe(30);
    expect(findSecondLargest([100])).toBe(null);
  });
});

