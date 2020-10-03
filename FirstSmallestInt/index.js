const numbersArr = [2,3,0,15,12,6];

const findSmallestNumber = array => {
    let min = array[0];
    let min2 = array[4];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        } else if (array[i] < min2) {
            min2 = array[i];
        }
    }
    console.log(`1st smallest number is ${min}`)
    return console.log(`2nd smallest number: ${min2}`);
}

findSmallestNumber(numbersArr)