// 1.
// Question:
// Your Job
// Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

// Answare:
// let sumMul = (a, b) => {
//   let sum = 0;
//   if (a >= b) return "INVALID";
//   else for (let i = a; i < b; i++) !(i % a) && (sum += i);
//   return sum;
// };
// sumMul(2, 9);

// ===========================================================================

// 2.
// Question:
// You are given two sorted arrays that contain only integers.
// These arrays may be sorted in either ascending or descending order.
// Your task is to merge them into a single array, ensuring that:
// The resulting array is sorted in ascending order.
// Any duplicate values are removed, so each integer appears only once.
// If both input arrays are empty, return an empty array.
// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// Answare:
// let mergeArrays = (arr1, arr2) => {
//   let arr = [];
//   [...arr1, ...arr2]
//     .sort((a, b) => a - b)
//     .forEach((value) => !arr.includes(value) && arr.push(value));
//   return arr;
// };
// mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]);

// ===========================================================================
