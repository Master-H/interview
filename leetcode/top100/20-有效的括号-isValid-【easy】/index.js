/*
 * @Author: xxx
 * @Date: 2020-12-21 23:51:44
 * @LastEditors: xxx
 * @LastEditTime: 2021-02-02 17:27:57
 * @Description: 文件功能描述
 */
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:= {}

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

var isValid = function (s) {
    const cache = []
    const map = new Map()
    map.set("(", ")")
    map.set("[", "]")
    map.set("{", "}")
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])){
             cache.push(s[i])
        }else {
            if (cache.length === 0) return false
            if (map.get(cache[cache.length - 1]) === s[i]) cache.pop()
            else return false
        }
    }
    return cache.length ? false : true 
    
};

function long(str){
    let len = str.length
    let dp = Array.from(new Array(len),() => new Array(len).fill(0))
    let result = ''
    for(let i =len-1 ;i >=0 ;i--){
        for(let j=i;j<len;j++){
            dp[i][j] = s[i] === s[j] && (dp[i+1][j-1] || j-i<2)
            if(dp[i][j] && j-i+1>result.length){
                result = str.slice(i,j)
            }
        }
        
    }
    return result
}