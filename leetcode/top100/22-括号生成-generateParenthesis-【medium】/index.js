/*
 * @Author: xxx
 * @Date: 2020-12-21 23:19:30
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-02 17:23:41
 * @Description: 文件功能描述
 */
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例：
// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

// 解题思路
// 1、构建括号就是不停的选括号，要么左要么右括号
// 2、约束：
//     只要有‘（’就可以选‘（’
//     只有当')'剩余比'('多才可以选‘）’
//     当构建长度达到2*n就可以结束递归
// 参考解法链接：https://leetcode-cn.com/problems/generate-parentheses/solution/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/
var generateParenthesis = function(n) {
    let res=[]
    function dfs(lRemain,rRemain,curStr){
        if(curStr.length === 2*n){
            res.push(curStr)
            return
        }
        if(lRemain > 0 ){
            dfs(lRemain-1,rRemain,curStr+'(')
        }
        if(rRemain > lRemain){
            dfs(lRemain,rRemain-1,curStr+')')
        }
    }
    dfs(n,n,'')
    return res
};
