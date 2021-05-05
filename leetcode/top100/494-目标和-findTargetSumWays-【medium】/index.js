/*
 * @Author: xxx
 * @Date: 2021-01-03 17:44:53
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-03 18:04:19
 * @Description: 文件功能描述
 */
// 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

// 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

//  

// 示例：

// 输入：nums: [1, 1, 1, 1, 1], S: 3
// 输出：5
// 解释：

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3

var findTargetSumWays = function(nums, S) {
    let count = 0
    function dfs(sum,idx){
        if(idx < nums.length ){
            dfs(sum + nums[idx],idx+1)
            dfs(sum - nums[idx],idx+1)
        }else{
            sum === S && count++
        }
       
    }
    dfs(0,0)
    return count
};
