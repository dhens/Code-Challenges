/* 
Source material: https://www.youtube.com/watch?v=10WnvBk9sZc

Write a fuunction that takes two strings, s1 and s2
and returns the longest common subsequence of s1 and s2

ABAZDC, BACBAD => ABAD
AGCTAB, GXTXAYV => GTAB

*/

/*

PSEUDOCODE

split each string into its own array

for loop
each element of each string array against the other
e.g ['g','r','a','v','y'], ['r','a','v','e']
g !== r, r === r, 
each consecutively matched occurance will be pushed to a 3rd array called subsequence

iterate through first array until one of the letter matches index of 0
if none of the letters in left array match the first element of array 2,
we will then check the following element in array 2, etc

*/

const longestCommonSubsequence = (s1, s2) => {

    let sOneSplit = s1.split('');
    let sTwoSplit = s2.split('');
    let subsquence = [];
    let j = 0;
    console.log(`-------------------------------\n\n\n`)
    for (let i = 0; i < sOneSplit.length; i++) {
        if (sOneSplit[i] === sTwoSplit[j]) {
            subsquence.push(sOneSplit[i]);
        } else {
            for (let j = 0; j < sTwoSplit.length; j++) {
                if(sOneSplit[i] ===  sTwoSplit[j]) {
                    subsquence.push(sOneSplit[i]);
                }
            }

        }
        console.log(subsquence)
    }
}

    longestCommonSubsequence('grape', 'apple');