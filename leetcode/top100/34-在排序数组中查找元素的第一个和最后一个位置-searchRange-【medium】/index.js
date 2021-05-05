/*
 * @Author: xxx
 * @Date: 2020-12-28 20:29:23
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-28 21:32:52
 * @Description: 文件功能描述
 */
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 进阶：
// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
// 示例 1：
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：
// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：
// 输入：nums = [], target = 0
// 输出：[-1,-1]


// 思路：二分
var searchRange = function(nums, target) {
    function search(nums,target,isFirst){
        let len = nums.length
        let l = 0
        let r = len - 1 
        while(l <= r){
            let mid  = l + ((r-l) >> 1)
            if(nums[mid] > target){
                r = mid -1
            }else if( nums[mid] < target){
                l = mid + 1
            }else{
                if(isFirst){
                    if(mid === 0  || nums[mid -1] !== target) return mid
                    r = mid -1
                }else{
                    if(mid === len - 1|| nums[mid+1] !== target) return mid
                    l = mid+1
                }
            }
           
        }
         return -1
    }
   
    return [search(nums,target,true),search(nums,target)]
};