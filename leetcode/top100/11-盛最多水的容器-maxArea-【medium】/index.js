/*
 * @Author: xxx
 * @Date: 2020-12-20 18:15:03
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-20 18:49:38
 * @Description: 文件功能描述
 */

var maxArea = function(height) {
    let right = height.length - 1
    let left = 0 
    let max = 0
    while(left < right){
        const leftVal = height[left]
        const rightVal = height[right]
        let area =  0
        if(leftVal < rightVal){
             area = leftVal*(right-left)
            left++
        }else{
             area = rightVal*(right-left)
            right--
        }
        max = Math.max(max,area)
    }
    return max
};