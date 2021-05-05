/*
 * @Author: xxx
 * @Date: 2020-12-20 20:28:21
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-20 21:57:03
 * @Description: 文件功能描述
 */
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。
// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
    let len  = nums.length 
    let res = []
    if(nums=== null || len <3) return []
    nums.sort((a, b) => a-b)
    
    for(let i = 0; i< len;i++){
        if(nums[i] > 0){
            return res
        }
        console.log('i',i)
        if(i >0 && nums[i] === nums[i-1]) continue
        let L = i+1
        let R = len - 1
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R]
            if(sum === 0 ){
                res.push([nums[i],nums[L],nums[R]])
                while( nums[L] === nums[L+1]) L++
                while( nums[R] === nums[R-1]) R--   
                L++
                R--
            }
            if(sum <0){
                L++
            }
            if(sum >0){
                R--
            }
        }
    }
    return res
};

