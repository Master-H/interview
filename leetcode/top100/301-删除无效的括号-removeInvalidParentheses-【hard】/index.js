/*
 * @Author: xxx
 * @Date: 2021-01-02 17:08:00
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-02 17:47:21
 * @Description: 文件功能描述
 */

// 删除最小数量的无效括号，使得输入的字符串有效，返回所有可能的结果。

// 说明: 输入可能包含了除 ( 和 ) 以外的字符。

// 示例 1:

// 输入: "()())()"
// 输出: ["()()()", "(())()"]
// 示例 2:

// 输入: "(a)())()"
// 输出: ["(a)()()", "(a())()"]
// 示例 3:

// 输入: ")("
// 输出: [""]
var removeInvalidParentheses = function(s) {
    let l = 0
    let r = 0
    let res = []
    let count = 0
    for(let i =0; i < s.length;i++){
        if(s[i] === '(') l++
        if(s[i] === ')') r++
    }
  
    function dfs(str,idx){
        if(l<=r || count === s.length){
             res.push(str)
             return
        }
        if(str[idx] === ')'){
            dfs(str,idx+1)
            let temp = [...str].splice(idx,1).join('')
            dfs(temp,idx+1)
            count++

        }

    }

    dfs(s,0)
    return res
    
};