/*
Complexity Analysis

    Time complexity : O(n^2)
    For each element, we try to find its complement by looping through the rest of array which takes O(n)O(n)O(n) time. 
    Therefore, the time complexity is O(n2)O(n^2)O(n2).

    Space complexity : O(1).
*/

const nums = [2,7,11,15];

const TwoSum = (nums, target) => {
    for (let i = 0; i <= nums.length; i++) {
        console.log(`Iteration ${i} started!`);
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return(console.log(`Target of ${target} found: ${[i, j]}`));
            }
        }
        // If i === nums.length that means theres no solution
        // since our array search has been exhausted
        // let the user know theres no solution
        if (i === nums.length) {
            return console.log('No solution!');
        }    
    }
}

TwoSum(nums, 26)