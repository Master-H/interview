/*
 * @Author: xxx
 * @Date: 2020-12-31 11:18:29
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-31 17:55:11
 * @Description: 文件功能描述
 */
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？
 // 示例 1：

// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
// 示例 2：

// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9

var longestConsecutive = function(nums) {
    let mySet = new Set()
    let maxLength = 0
    for(let val of nums){
        mySet.add(val)
    }
    for(let val of mySet){
        // 直接找到已有连续值中的最小的那个开始开始正向记数
        if(!mySet.has(val-1)){
            let cur = val
            let count = 1
            while(mySet.has(cur+1)){
                cur += 1
                count++
            }
            maxLength = Math.max(maxLength,count)
        }
    }
    return maxLength
 
 };