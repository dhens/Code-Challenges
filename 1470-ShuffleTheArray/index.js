/*

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const nums = [2,5,1,3,4,7];

var shuffle = function(nums, n) {
    let halfLength = Math.ceil(nums.length / 2);
    let leftSide = nums.slice(0, halfLength);
    let rightSide = nums.slice(halfLength, nums.length);
    let shuffledArray = [];
    
    for (let i = 0; i < halfLength; i++) {
        shuffledArray.push(leftSide[i]);
        shuffledArray.push(rightSide[i]);
    }
    return shuffledArray;
};