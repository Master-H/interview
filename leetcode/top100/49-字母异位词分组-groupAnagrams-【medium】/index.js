/*
 * @Author: xxx
 * @Date: 2020-12-28 23:25:16
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-28 23:49:24
 * @Description: 文件功能描述
 */
// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
var groupAnagrams = function(strs) {
    let map = new Map()
    for(let str of strs){
        let arr = Array.from(str)
        arr.sort()
        let key = arr.toString()
        let list = map.get(key) ? map.get(key) : []
        list.push(str)
        map.set(key,list)
    }
    return [...map.values()]
};
