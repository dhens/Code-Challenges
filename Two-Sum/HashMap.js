/* 
Time complexity : O(n) 
    We traverse the list containing n elements exactly twice. 
    Since the hash table reduces the look up time to O(1)
    the time complexity is O(n)

Space complexity : O(n)
    The extra space required depends on the number of items stored in the hash table, 
    which stores exactly n elements.

*/

const nums = [2, 7, 11, 15];

const twoSum = function (nums, target) {
    // Creates new HashMap
    const HashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        HashMap.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        console.log(i)
        let compliment = target - nums[i];
        let hasCompliment = HashMap.has(compliment);
        let currentComplement = HashMap.get(compliment);

        if (hasCompliment && currentComplement !== i) {
            return console.log([i, HashMap.get(compliment)]);
        }
        HashMap.set(nums[i], i);
    }
};

twoSum(nums, 26)