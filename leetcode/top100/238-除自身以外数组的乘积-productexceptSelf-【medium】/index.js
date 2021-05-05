/*
 * @Author: xxx
 * @Date: 2021-01-01 20:36:08
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-01 21:03:57
 * @Description: 文件功能描述
 */
// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 示例:
// 输入: [1,2,3,4]
// 输出: [24,12,8,6]
// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 示例:
// 输入: [1,2,3,4]
// 输出: [24,12,8,6]
// 要求 o(n),常数空间内完成
var productExceptSelf = function(nums) {
    let len = nums.length
    let res = new Array(len)
    res[0] = 1
    for(let i = 1; i < len;i++){
        res[i] = res[i-1]*nums[i-1] // 数组I的左边（不含I)所有乘积
    }
    let R = 1
    for(let i = len-1;i>=0;i--){ // 要等于0
        res[i] = res[i]*R
        R=nums[i]*R
    }
    return res

};
