/*
 * @Author: xxx
 * @Date: 2021-01-27 00:02:55
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-27 00:04:00
 * @Description: 文件功能描述
 */
给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

示例 1:

输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。

var repeatedSubstringPattern = function(s) {
    let s1 = (s + s).slice(1, -1);
    return s1.indexOf(s) != -1;
};

