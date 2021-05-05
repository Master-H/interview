// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2


const searchInsert = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      if (target <= nums[i]) {
        return i;
      }
    }
    return nums.length; 
  };
  
  const searchInsert = (nums, target) => {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >>> 1;
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] > target) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return lo; // 退出循环时 hi比lo小1
  };
