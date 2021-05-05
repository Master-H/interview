/*
 * @Author: xxx
 * @Date: 2020-12-27 17:22:07
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-27 17:45:46
 * @Description: 文件功能描述
 */
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2,2,1]
// 输出: 1
// 示例 2:

// 输入: [4,1,2,1,2]
// 输出: 4

// 常规方法
var singleNumber = function(nums) {
    for(let i = 0;i < nums.length; i++){
        let lastIndex = nums.lastIndexOf(nums[i])
        if(lastIndex !== i) {
            nums.splice(lastIndex,1)
        }else{
            return nums[i]
        }
    }
};
//异或方法不推荐，必须遍历n次，切可读性较差
// 异或方法：如果同一位的数字相同则为 0，不同则为 1
var singleNumber = function(nums) {
    let res = 0
    for(let val of nums){
        res ^= val // a^b^c = a^c^b ,若遇到重复的就为0了
    }
    return res
};
