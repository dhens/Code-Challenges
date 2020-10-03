/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

const candies = [2,3,5,1,3];
const extraCandies = 2;
const output = [];

const greatestCandies = candies => {
    return Math.max.apply(null, candies)
}

function kidsWithCandies(candies, extraCandies) {
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatestCandies(candies)) {
            output.push(true);
        } else {
            output.push(false);
        }
    }
    console.log(output);
};

kidsWithCandies(candies, extraCandies);