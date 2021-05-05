/*
 * @Author: xxx
 * @Date: 2021-01-03 11:53:10
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-03 17:32:38
 * @Description: 文件功能描述
 */
// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

// 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

// 说明：

// 字母异位词指字母相同，但排列不同的字符串。
// 不考虑答案输出的顺序。
// 示例 1:

// 输入:
// s: "cbaebabacd" p: "abc"

// 输出:
// [0, 6]

// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
//  示例 2:

// 输入:
// s: "abab" p: "ab"

// 输出:
// [0, 1, 2]

// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
// 滑动窗口
var findAnagrams = function(s, p) {
    let need = new Map() // 存储目标字符串计数
    let window = new Map() // 滑动窗口
    let l = 0
    let r = 0
    let res = []
    for(let val of p){
        need.set(val,need.has(val) ? need.get(val) + 1 : 1)
    }
    let validCount = 0
    while(r < s.length ){
       
        let cur = s[r]
        r++
        if(need.has(cur)){
            window.set(cur,window.has(cur) ? window.get(cur)+1 : 1)
            if(window.get(cur) === need.get(cur)){ // 对应的字符次数是一样的 
                validCount++ // 统计有效的字符数，必须对应的字符出现次数一样'bbac' abbc'
            }
            
        }
        if(r-l>=p.length ){
           
            if(validCount === need.size){
                res.push(l)
            }
            let leftVal = s[l]
            l++
            if(need.has(leftVal)){
                if(window.get(leftVal) === need.get(leftVal)){
                    validCount--
                }
                window.set(leftVal,window.get(leftVal)-1)
            }
        }
    }
    return res

};
