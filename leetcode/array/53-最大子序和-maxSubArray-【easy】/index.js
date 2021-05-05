// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶:

// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

var maxSubArray = function(nums) {
    let sum = -Infinity;
    let temp = 0
    for(let i = 0;i < nums.length;i++){
        temp = temp+nums[i]
        if( temp > sum){
            sum = temp
        }
        if(temp <=0){
            temp = 0
        }

    }
    return sum
};
// 动态规划
var maxSubArray = function(nums){
    let pre = 0 ; 
    let max = nums[0]
    nums.map(item => {
        pre = Math.max(pre+item,item)
        max = Math.max(max,pre)
    })
    return max
}
// 标准动态规范
var maxSubArray = (nums) => {
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i- 1] + nums[i], nums[i]);	
        max = Math.max(max,dp[i])
    }
    return max;
}
