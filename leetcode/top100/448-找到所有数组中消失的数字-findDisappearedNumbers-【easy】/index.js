/*
 * @Author: xxx
 * @Date: 2020-12-27 21:59:10
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-27 22:19:22
 * @Description: 文件功能描述
 */
// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。

// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
// 示例:
// 输入:
// [4,3,2,7,8,2,3,1]
// 输出:
// [5,6]

var findDisappearedNumbers = function(nums) {
    let res = Array(nums.length).fill(0)

    for(let i = 0; i<nums.length;i++){
        if(res[i] === 0 ){
            res[i] = i+1
        }
        res[nums[i]-1] = -1
    }
    return res.filter(item => item !== -1)

};