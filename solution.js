// Problem 1: Staircase
var staircase = function(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    result.push(spaces + hashes);
  }
  return result.join("\n");
};

// Problem 2: Grading Students
var gradingStudents = function(grades) {
  let finalGrades = [];

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    if (grade >= 38) {
      let remainder = grade % 5;
      if (remainder >= 3) {
        grade += (5 - remainder);
      }
    }
    finalGrades.push(grade);
  }

  return finalGrades;
};

// Problem 3: Time Conversion
var timeConversion = function(s) {
  let period = s.slice(-2);
  let hour = parseInt(s.substring(0, 2));
  let restOfTime = s.substring(2, 8);

  if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour !== 12) {
      hour += 12;
    }
  }

  let formattedHour = hour < 10 ? "0" + hour : "" + hour;
  return formattedHour + restOfTime;
};

// Problem 4: String Repeat
var repeatStr = function(n, s) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += s;
  }
  return res;
};

// Problem 5: Reversed Strings
var solution = function(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// Problem 6: Sum of Positive
var positiveSum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
};

// Problem 7: Grasshopper — Summation
var summation = function(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// Problem 8: Convert a Boolean to a String
var booleanToString = function(b) {
  if (b === true) {
    return "true";
  }
  return "false";
};

// Problem 9: Fizz Buzz
var fizzBuzz = function(n) {
  let output = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i.toString());
    }
  }

  return output;
};

// Problem 10: Running Sum of 1D Array
var runningSum = function(nums) {
  let ans = [];
  let currentTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    currentTotal += nums[i];
    ans.push(currentTotal);
  }

  return ans;
};

// Problem 11: Richest Customer Wealth
var maximumWealth = function(accounts) {
  let richest = 0;

  for (let i = 0; i < accounts.length; i++) {
    let personMoney = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      personMoney += accounts[i][j];
    }
    if (personMoney > richest) {
      richest = personMoney;
    }
  }

  return richest;
};

// Problem 12: Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return insertIndex;
};

// Problem 13: Contains Duplicate
var containsDuplicate = function(nums) {
  let tracker = {};

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (tracker[val]) {
      return true;
    }
    tracker[val] = true;
  }

  return false;
};

// Problem 14: Move Zeroes
var moveZeroes = function(nums) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  while (pos < nums.length) {
    nums[pos] = 0;
    pos++;
  }
};

// Problem 15: Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

// Problem 16: 3Sum
var threeSum = function(nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return ans;
};

// Problem 17: Plus One
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

// Problem 18: Reverse String
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

// Problem 19: Length of Last Word
var lengthOfLastWord = function(s) {
  let count = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    count++;
    i--;
  }

  return count;
};

// Problem 20: Longest Common Prefix
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};