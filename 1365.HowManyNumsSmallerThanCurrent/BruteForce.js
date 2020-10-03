var smallerNumbersThanCurrent = function(nums) {
    var smallerCount = 0;
    let smallerCountArray = []
    for (let i = 0; i < nums.length; i++) {
        for (let k = 0; k < nums.length; k++) {
            if (nums[i] > nums[k]) {
                smallerCount++;
            }
        }
        smallerCountArray.push(smallerCount);
        var smallerCount = 0;
    }
     console.log(smallerCount);
     console.log(smallerCountArray)
}

smallerNumbersThanCurrent([8,1,2,2,3]);