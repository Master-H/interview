// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// 示例 1:
// 输入: [3,2,3]
// 输出: 3
// 示例 2:
// 输入: [2,2,1,1,1,2,2]
// 输出: 2

var majorityElement = function(nums) {
    let midIndex = Math.floor(nums.length/2)
    let res = []
    let obj = {}
    for(let val of nums){
        if(obj[val] === undefined){
             obj[val] = 1
        }else{
             obj[val]++
        }
        if(obj[val] > midIndex){
            res.push(val)
            console.log('res',res)
        } 
    }
    return [...new Set(res)]
};

// 排序时间：nlogn
var majorityElement = function(nums) {
   nums.sort((a, b) => a-b)
   let mid = Math.floor(nums.length/2)
   return nums[mid]
};

// 栈降维 时间：o(n) 空间：o(1)
var majorityElement = function(nums) {
    let temp = 0; 
    let count = 0
    for(let val of nums){
        if(count === 0) temp = val
        count += temp === val ? 1 : -1
    }
    return temp
 };
  
  