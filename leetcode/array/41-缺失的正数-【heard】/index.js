// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

// 进阶：你可以实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案吗？
// 示例 1：

// 输入：nums = [1,2,0]
// 输出：3
// 示例 2：

// 输入：nums = [3,4,-1,1]
// 输出：2

var firstMissingPositive = function(nums) {
    let result = 1
    while(nums.includes(result)){
        result++
    }
    return result
};