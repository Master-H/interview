/*
 * @Author: xxx
 * @Date: 2020-12-20 22:39:24
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-20 22:56:33
 * @Description: 文件功能描述
 */
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

var letterCombinations = function(digits) {
    const keyString = [
        '',
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ]
  
    if (!digits|| !digits.length ) return []
    let queue = ['']
    for(let digit of digits){
        let len = queue.length
        for(let i = 0; i < len;i++){
            let old = queue.shift()
            for(let val of keyString[digit]){
                queue.push(old+val)
            }
        }
    }
    return queue
  
};