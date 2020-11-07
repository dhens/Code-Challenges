// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

// Example 2:

// Input: nums = [1,1,2,3]
// Output: [1,3,3]

const decompressRLElist = nums => {
    let freqVal = 0;
    let pushVal = 0;
    const compressedArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 + 1 === 2) {
            pushVal = nums[i];
            for (let j = 0; j < freqVal; j++) {
                compressedArr.push(pushVal);
            }
        } else {
            // check value of the array with the current index i value, store it in freqVal
            freqVal = nums[i];
            // check value of the next item in array with current index, store it in pushVal
            // once two indexes have been checked, push the pushVal into compressedArr freqVal amount of times
        }
    }
    console.log(compressedArr)
};

decompressRLElist([1, 2, 3, 4])