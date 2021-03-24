//https://leetcode.com/problems/find-the-highest-altitude/

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let netGain = 0; let max = 0
    for(let i = 0;i<gain.length;i++){
        netGain = netGain + gain[i]
        if(netGain > max)
            max = netGain
    }
    return max
};
