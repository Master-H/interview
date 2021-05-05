/*
 * @Author: xxx
 * @Date: 2021-01-02 11:37:06
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-02 17:06:40
 * @Description: 文件功能描述
 */
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
// 示例 1：
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
// 解题思路参考：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/
// 关键： nums[i] > nums[j],可接在nums[j]后面，满足上升子序列，此情况下最长上升子序列长度为 dp[j] + 1，不满足直接跳过

var lengthOfLIS = function(nums) {
    let max = 1
    let dp = new Array(nums.length).fill(1)
    for(let i = 1; i <nums.length;i++){
        for(let j = 0; j< i;j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i],dp[j]+1)
               
            }
           
        }
        max = Math.max(max,dp[i])
    }
    return max
};