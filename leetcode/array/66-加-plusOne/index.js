
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。
// 示例 1：
// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。
// 示例 2：

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。
var plusOne = function(digits) {
    let arr = [0]
    let len = digits.length
    let res = Array(len+1).fill(0)
    res[len]=1
    for(let i = len - 1; i >=0;i--){
        let sum = res[i+1] + digits[i]
        let val = sum%10
        res[i+1] = val
        res[i] = sum >=10 ? 1 : 0
    }
    return res =  res[0] ? res : res.slice(1)
 
};

// 解法2
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits
};
