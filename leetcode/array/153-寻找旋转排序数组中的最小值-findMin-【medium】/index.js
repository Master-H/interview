// 把一个数字最开始的若干个元素搬到数组的末尾，称之为数组的旋转。
//输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1
// 我们先从示例1，列举出递增数组[1, 2, 3, 4, 5]的所有可能旋转的情况：
// 它们分别是[2, 3, 4, 5, 1], [3, 4, 5, 1, 2], [4, 5, 1, 2, 3],[5, 1, 2, 3, 4]这几种可能的情况。
// 二分法：
// 1、既然涉及到排序就可以考虑二分法，虽然局部排序，但是也不影响查找
// 2、正常二分法只需要判断大小侯直接切换区间
// 3、本地如果直接切换区间可能丢失要查找的值，所以在二分时应该要有回溯分区的逻辑

// 逻辑：
// left,right做区分的边界，mid做二分的中点
// 比较边界的值：
// 1、left < right，默认分区为有序，正常二分
// 2、left > right，说明分区中存在非排序片段，而且left位置不可能是结果，则缩小范围，left + 1
// 3、left =right，无法判断有序或者无序，缩小收缩范围（left+1 or right--
/**
 * @param {number[]} numbers
 * @return {number}
 */
function findMin(nums){
  let l = 0
  let r = nums.length
  while(l<r){
      let mid = r+l>>1
      if(nums[l] < nums[r]){
         r = mid
      }else if(nums[l] > nums[r]){
          l++
      }else{
          r--
      }
  }
  return nums[l]
}
  
  // 法二
  function name(arr) {
    return Math.min(...arr)
  }