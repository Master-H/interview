/*
 * @Author: xxx
 * @Date: 2020-12-31 21:52:31
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-31 23:19:57
 * @Description: 文件功能描述
 */
// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
// 示例 1:
// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:
// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
// 解题关键： 当前值为正或者负数会影响前面的值
// 状态转移方程:
// prevMin = min( prevMin * nums[i], prevMax * nums[i], nums[i])
// prevMin=min(prevMin∗nums[i],prevMax∗nums[i],nums[i])


var maxProduct = function(nums) {
    let res = nums[0]
    let prevMin = nums[0]
    let prevMax = nums[0]
    for(let i = 1; i < nums.length; i++){
        let curVal = nums[i]
        let temp1 = prevMin*curVal 
        let temp2 = prevMax*curVal
        // 最小值可能是当前值，也有可能是前面prevMax*当前值（负数），也有可能是当前值*prevMin,同理最大值
        prevMin = Math.min(curVal,temp1,temp2)
        prevMax = Math.max(curVal,temp1,temp2)
        res = Math.max(prevMax, res)
    }
    return res
};