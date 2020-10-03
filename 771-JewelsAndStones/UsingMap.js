/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Time complexity : O(n) 
    We traverse the list containing n elements exactly twice. 
    Since the hash table reduces the look up time to O(1)
    the time complexity is O(n)

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const hashMap = new Map();
    let jewelsThatAreStones = 0;
    for (let i=0;i<J.length;i++) {
        hashMap.set(J[i], i);
        console.log(hashMap);
    }

    for (let k=0;k<S.length;k++) {
        if (hashMap.has(S[k])) {
            jewelsThatAreStones++;
        }
    }
    console.log(jewelsThatAreStones);
};

numJewelsInStones('aA', 'aAAbbbb');