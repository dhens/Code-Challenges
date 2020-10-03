const string = 'taco cat';

const reverseString  = string => {
    let stringArray = string.split('');
    let reversedStringArray = [];
    for (let i = 0; i < string.length; i++) {
        reversedStringArray.unshift(stringArray[i]);
    }
    let reversedString = reversedStringArray.join('');
    return reversedString;
}

reverseString(string);