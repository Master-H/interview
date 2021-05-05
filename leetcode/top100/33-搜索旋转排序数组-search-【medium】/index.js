/*
 * @Author: xxx
 * @Date: 2020-12-27 12:06:20
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-27 10:54:21
 * @Description: 文件功能描述
 */
// 升序排列的整数数组 nums 在预先未知的某个点上进行了旋转（例如， [0,1,2,4,5,6,7] 经旋转后可能变为 [4,5,6,7,0,1,2] ）。

// 请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

// 示例 1：
// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
// 示例 2：
// 输入：nums = [4,5,6,7,0,1,2], target = 3
// 输出：-1
// 示例 3：
// 输入：nums = [1], target = 0
// 输出：-1

// 思路：参考https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/yi-wen-jie-jue-4-dao-sou-suo-xuan-zhuan-pai-xu-s-2/
// 题目要求时间复杂度 O(logn)O(logn)，显然应该使用二分查找。二分查找的过程就是不断收缩左右边界，而怎么缩小区间是关键。

// 如果数组「未旋转」，在数组中查找一个特定元素 target 的过程为：

// 若 target == nums[mid]，直接返回
// 若 target < nums[mid]，则 target 位于左侧区间 [left,mid) 中。令 right = mid-1，在左侧区间查找
// 若 target > nums[mid]，则 target 位于右侧区间 (mid,right] 中。令 left = mid+1，在右侧区间查找
// 但是这道题，由于数组「被旋转」，所以左侧或者右侧区间不一定是连续的。在这种情况下，如何判断 target 位于哪个区间？

// 根据旋转数组的特性，当元素不重复时，如果 nums[i] <= nums[j]，说明区间 [i,j] 是「连续递增」的。

// i、j 可以重合，所以这里使用的比较运算符是「小于等于」

// 因此，在旋转排序数组中查找一个特定元素时：

// 若 target == nums[mid]，直接返回
// 若 nums[left] <= nums[mid]，说明左侧区间 [left,mid]「连续递增」。此时：
// 若 nums[left] <= target <= nums[mid]，说明 target 位于左侧。令 right = mid-1，在左侧区间查找
// 否则，令 left = mid+1，在右侧区间查找
// 否则，说明右侧区间 [mid,right]「连续递增」。此时：
// 若 nums[mid] <= target <= nums[right]，说明 target 位于右侧区间。令 left = mid+1，在右侧区间查找
// 否则，令 right = mid-1，在左侧区间查找
// 注意：区间收缩时不包含 mid，也就是说，实际收缩后的区间是 [left,mid) 或者 (mid,right]


// 简单办法
var search = function(nums, target) {
    return nums.indexOf(target)
};

// 优化办法二分
var search = function(nums, target) {
    let len = nums.length
    if(len === 0) return -1

    let l = 0
    let r = len -1
    while(l <= r){
        let mid = l+r>>1
        if(nums[mid] === target) return mid
        if(nums[l] <= nums[mid]){
            if(nums[l] <= target && nums[mid] >= target){
                r = mid - 1
            }else{
                l = mid + 1
            }
        }else{
            if(nums[mid] <= target && target <= nums[r]){
                l = mid + 1
            }else{
                r = mid - 1
            }
        }
    }
    return -1
   };


   // 寻找最小
//    var findMin = function(nums) {
//     let len = nums.length;
//     let left = 0;
//     let right = len - 1;
//     let mid  = 0
//     while(left < right){
//          mid = (left+right)>>1
//         if(nums[left] < nums[right]){// 完全有序
//           right = mid
//         }else if(nums[left] > nums[right]){
//             left++
//         }else{
//             right--
//         }
//     }
//     return nums[left]
//   };