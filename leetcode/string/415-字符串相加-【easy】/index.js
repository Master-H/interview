// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
// 提示：
// num1 和num2 的长度都小于 5100
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let add = 0
    let result = []
    while(i >= 0 || j >= 0 || add != 0){
        const x =  i >= 0 ? num1.charAt(i) - '0' : 0 // - '0'是处理，越界i设置其值为0
        const y =  j >= 0 ? num2.charAt(j) - '0' : 0
        const sum  = x + y + add
        result.push(sum%10)
        add = Math.floor(sum/10)
        console.log(result)
        i--
        j--
    }
    return result.reverse().join('')
};