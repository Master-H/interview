/*
 * @Author: xxx
 * @Date: 2020-12-29 21:51:45
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-29 22:31:38
 * @Description: 文件功能描述
 */
// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个位置。

// 示例 1:

// 输入: [2,3,1,1,4]
// 输出: true
// 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
// 示例 2:

// 输入: [3,2,1,0,4]
// 输出: false
// 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

// 思路：贪心算法https://leetcode-cn.com/problems/jump-game/solution/tiao-yue-you-xi-by-leetcode-solution/
var canJump = function(nums) {
    let len = nums.length
    let maxStep = 0
    for(let i = 0; i<len;i++){
        // i <= maxStep说明当前位置可以到达
        if(i <= maxStep){
            maxStep = Math.max(maxStep,i+nums[i])
            // 如果最远能走的距离直接数组长度直接返回true
            if(maxStep >= len - 1){
                return true
            } 
        }
        
    }
    return false
};