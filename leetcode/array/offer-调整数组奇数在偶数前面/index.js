// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

//  

// 示例：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。
var exchange = function(nums) {
    const length = nums.length;
    let left = 0;
    let right = length - 1
    while(left <= right){
        if(nums[left]%2 === 1){
            left++ // 寻找偶数
            continue
           
        } 
       if(nums[right]%2 === 0 ){
            right-- // 寻找奇数
            continue
            
        }
        [nums[right],nums[left]] = [nums[left],nums[right]]
        left++
        right--
    }
    return nums
    
};