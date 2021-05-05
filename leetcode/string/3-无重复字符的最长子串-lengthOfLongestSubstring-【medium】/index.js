// 无重复字符的最长子串
var lengthOfLongestSubstring = function(s) {
    let arr = []
    let max = 0
    for(let val of s){
        let index = arr.indexOf(val)
        if(index !== -1){ // 存在
           arr.splice(0,index+1)
        }
        arr.push(val)
        
        max = Math.max(max,arr.length)
    }
    return max
}

let sequence = 'abab'
let word = 'ab'
console.log(maxRepeating(sequence,word));