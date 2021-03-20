//https://leetcode.com/problems/richest-customer-wealth/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
     let maxSum = 0
for (let i = 0; i < accounts.length; i++) {
    let sum = 0
    let innerArrayLength = accounts[i].length;    
    for (let j = 0; j < innerArrayLength; j++) {
        sum = sum + accounts[i][j]
        if (sum >= maxSum)
        maxSum = sum;
    }
}
     return maxSum
};
