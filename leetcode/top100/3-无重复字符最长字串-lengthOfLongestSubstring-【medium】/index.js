// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var lengthOfLongestSubstring = function(s) {
    let arr = []
    let max = 0
    for(let i = 0; i < s.length; i++){
        let target = s[i]
        let targetIndex = arr.indexOf(target)
        if(targetIndex !== -1){
            arr.splice(0,targetIndex+1)
        }
        arr.push(target)
        max = Math.max(max,arr.length)

    }
    return max

};