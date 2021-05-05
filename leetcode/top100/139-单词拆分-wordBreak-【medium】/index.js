/*
 * @Author: xxx
 * @Date: 2020-12-31 18:08:42
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-31 18:27:48
 * @Description: 文件功能描述
 */
// 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

// 说明：

// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
// 示例 2：

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//      注意你可以重复使用字典中的单词。
// 示例 3：

// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false
// var wordBreak = function(s, wordDict) {
//     wordDict.every((value) => {
//         let str = ''
//         for(let val of s){
//             if(value.includes(str+val)){
//                 str +=val
//             }else{
//                 str = ''
//             }
//         }
//         return str === value
//     })
// };
// let str = 'dfadf'
let arr = [1,2,-1,3,-2]
let str ='afsji'
function test(){
    arr.every(val => {
        console.log('val',val);
        for(let val of str){
            console.log(val);
            if(val === 'f') break
        }
    })
}
test()
// for(let val of str){
//     console.log(val);
//     if(val === 'f') return
// }
// let arr = [1,2,-1,3,-2]
// let res = arr.every(val => {
//     console.log(val);
//     return val >0

// })
// console.log('res',res);