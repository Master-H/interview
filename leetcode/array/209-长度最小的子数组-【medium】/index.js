// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

//  

// 示例 1：

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 示例 2：

// 输入：target = 4, nums = [1,4,4]
// 输出：1

var minSubArrayLen = function(target, nums) {
    let len = nums.length
    let  i = 0;
    let  j = 0;
    let sum =  0
    let minLen = Infinity
    while(i<len){
        sum += nums[i]
        while(sum >= target){
            sum -= nums[j]
            minLen = Math.min(minLen,i-j+1)
            j++
        }
        i++
    }
    return minLen === Infinity ? 0 : minLen;// 从未找到可行解，返回0
};
