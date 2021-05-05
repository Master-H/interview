// 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 
// 示例 1:

// 输入: amount = 5, coins = [1, 2, 5]
// 输出: 4
// 解释: 有四种方式可以凑成总金额:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// 解题思路：dp[i][j] = x  表示对于第i个物品，容量为j有 x种解法
// 状态转移
// 当选择的第i个硬币的金额比想凑的金额大时，即只有选择不装
if (j - coins[i - 1] < 0) {
    dp[i][j] = dp[i - 1][j];
} else {
    // 我们要求的dp[i][j]是共有多少种凑法，所以dp[i][j]的值应该是以上两种选择的结果之和，dp[i][j] = 不装 + 装
    dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
}

// 3、 base case
// dp[0][..] = 0 如果不使用任何硬币面值，就无法凑出任何金额，即0种凑法
// 和
// dp[..][0] = 1 (dp[0][0]=1) 如果要凑出的目标金额为 0，那么有唯一的一种凑法

var change = function(amount, coins) {
    let dp = []
    let len = coins.length
    for(let i = 0; i<len+1;i++){ // len+1因为最后答案要选择第len个
        dp[i] = [];
        for(let j = 0; j < amount+1;j++){
            if(i===0){
                dp[0][j] = 0 // 不选硬币是不可能凑出金额为j
            } 
            if(j===0){
                dp[i][0] = 1 // 金额总数为0只有一种可能，就是不选硬币
            }else{
                dp[i][j] = 0 // 初始化为0
            }
        }
    }
    for(let i = 1; i < len+1;i++){ // 这里i代表第一个
        for(let j = 1; j < amount+1;j++){
            if(j - coins[i-1] < 0){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]]
            }
        }
    }
    return dp[len][amount]
};


// 参考：https://leetcode-cn.com/problems/coin-change-2/solution/ling-qian-dui-huan-wan-quan-bei-bao-by-xing-guang-/