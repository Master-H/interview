/*
 * @Author: xxx
 * @Date: 2021-01-02 21:10:39
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-02 21:58:15
 * @Description: 文件功能描述
 */
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。
// 示例 1：
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1
// 示例 2：

// 输入：coins = [2], amount = 3
// 输出：-1
// 示例 3：

// 输入：coins = [1], amount = 0
// 输出：0
// 示例 4：

// 输入：coins = [1], amount = 1
// 输出：1
// 示例 5：

// 输入：coins = [1], amount = 2
// 输出：2
var coinChange = function(coins, amount) {
    coins.sort((a, b) => b-a)
   let res = Infinity
   let len = coins.length
   
   function help(amount,idx,count){
        if(amount === 0){
            return res = Math.min(res,count)
        }
        if(idx === len){ // 递归边界
            return
        } 
        // 取最大值所有可能的次数，但是要小于前面已经满足条件的次数剪枝，递归
        for(let n = amount/coins[idx] | 0; n >=0 && count+n<res;n--){
            help(amount - n*coins[idx],idx+1,count+n)
        }
   }
   help(amount,0,0)
   return  res === Infinity ? -1 : res
};