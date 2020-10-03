/* Source material: https://www.youtube.com/watch?v=10WnvBk9sZc */

const longestSubsequence = (s1, s2) => {
    const results = [...s1].map(s1Char => {
        const s2Index = s2.findIndex(s1Char);
        if(s2Index === -1) return [];
    })
}