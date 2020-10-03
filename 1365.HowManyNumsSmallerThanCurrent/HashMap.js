var smallerNumbersThanCurrent = function(nums) {
    let smallerCount = 0;
    let smallerCountArray = []
    const hashMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        hashMap.set(i, nums[i])
    }
    const hashIter = hashMap.entries();

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === hashIter.next().value[1]) {
            console.log(`nums[j] & hashIter.next().value[1]) === ${nums[j]}`)
        }
        // if (nums[j] > hashIter.next().value[1]) {
        //     console.log(nums[j])
        //     smallerCount++;
        //     smallerCountArray.push(smallerCount);
        //     smallerCount = 0;
        // }
    }
     console.log(smallerCountArray)
}


smallerNumbersThanCurrent([8,1,2,2,3])