// https://leetcode.com/problems/robot-return-to-origin/
/**
 * @param {string} moves
 * @return {boolean}
 */ 
var judgeCircle = function(moves) {
    let width = 0
    let height = 0
    for(let i = 0; i< moves.length; i++){
        if(moves[i] == "U"){
            height++ 
        }
        if(moves[i] == "D"){
            height--
        }
         if(moves[i] == "L"){
            width--
        }
         if(moves[i] == "R"){
            width++
        }
    }
    if(height == 0  && width === 0)
        return true
    else return false
};
