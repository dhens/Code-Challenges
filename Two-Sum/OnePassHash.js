const nums = [2, 7, 11, 15];
const twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return console.log([map.get(complement), i]);
        }
        map.set(nums[i], i);
    }
}

twoSum(nums, 26);