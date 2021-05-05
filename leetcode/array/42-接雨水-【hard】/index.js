// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例 1：

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

// https://leetcode-cn.com/problems/trapping-rain-water/

var trap = function(height) {
    let len = height.length
    let leftMax = []
    let rightMax = []
    let res = 0
    leftMax[0] = height[0]
    for(let i = 1; i <len;i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i])
    }
    rightMax[len-1] = height[len-1]
    for(let i = len-2; i >=0;i--){
        rightMax[i] = Math.max(rightMax[i+1],height[i])
    }
    for(let i = 0; i < len;i++){
        res +=  Math.min(leftMax[i],rightMax[i]) - height[i]
    }
    return res
};