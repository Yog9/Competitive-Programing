//https://leetcode.com/problems/merge-strings-alternately
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = ''
    if(word1.length === word2.length){
        for(let i = 0; i<word1.length; i++){
           str = str + word1[i] 
           str = str + word2[i]
        }
    }
    if(word1.length < word2.length){
        let count = 0
         for(let i = 0; i<word1.length; i++){
           str = str + word1[i] 
           str = str + word2[i]
             count++
        }
        let x = word2.slice(count)
        str = str + x
    }
    if(word1.length > word2.length){
        let count = 0
         for(let i = 0; i<word2.length; i++){
           str = str + word1[i] 
           str = str + word2[i]
             count++
        }
        let x = word1.slice(count)
        str = str + x
    }
    return str
};
