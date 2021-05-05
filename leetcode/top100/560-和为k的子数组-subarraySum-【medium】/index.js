/*
 * @Author: xxx
 * @Date: 2021-01-03 18:41:26
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-03 19:43:04
 * @Description: 文件功能描述
 */
 // 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

// 示例 1 :

// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
// sum[i] = sum[i+1] + nums[i]

// 会超时
var subarraySum = function(nums, k) {
   let count = 0
    for(let i = 0;i < nums.length;i++){
        let sum = 0
        for(let j = i; j>=0;j--){
           sum += nums[j]
           if(sum ===k){
               count++
           }
            
        }
    }
    return count
};

// 前缀加哈希优化
// 解题思路： map = {0:1} ,pre =7 ,pre -7 =0 map有，计数加1,此时map{0:1,7:1}
// 继续pre继续累加，到14，pre-7 = 7,前面有，计数再加1，这里相当于，又有一段和加起来等于k:7,

var subarraySum = function(nums, k) {
    let count = 0
    let pre = 0
    let map = new Map()
    map.set(0,1)
    for(let val of nums){
        pre += val
        // 当满足pre是目标k的倍数，计数加1
        // 一开始map = {0:1},第一次pre=7,pre-k = 0,map有，并且此时map没有7这个key,所以此时map={0:1,7:1}
        // 继续累加pre = 14, pre-7 =7,而map有7这个key所有计数继续加1，其实相当于又有一段值累加为7，共两段
        if(map.has(pre-k)){ // 是目标k的倍数，所有计数加1，因为，第一次pre=7,map={7,1}
            //因为 34-1134，其实一共有3段值，
            count += map.get(pre-k)
        }
        if(map.has(pre)){ // 累加的合记录下来
            map.set(pre,map.get(pre)+1)
        }else{
            map.set(pre,1)
        }
    }
    return count
};