/*
 * @Author: xxx
 * @Date: 2021-01-01 16:05:26
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-01 17:04:22
 * @Description: 文件功能描述
 */
// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积

// 解题思路关键：
// 如果该位置的值是 00，则 dp(i, j) = 0dp(i,j)=0，因为当前位置不可能在由 11 组成的正方形中；

// 如果该位置的值是 11，则 dp(i, j)dp(i,j) 的值由其上方、左方和左上方的三个相邻位置的 dpdp 值决定。
// 具体而言，当前位置的元素值等于三个相邻位置的元素中的最小值加 11，状态转移方程如下：

// dp(i, j)=min(dp(i−1, j), dp(i−1, j−1), dp(i, j−1))+1
// dp(i,j)=min(dp(i−1,j),dp(i−1,j−1),dp(i,j−1))+1


var maximalSquare = function(matrix) {
    let rows = matrix.length
    let dp = new Array(rows)
    let maxLength = 0
    for(let i = 0; i< rows;i++){
        dp[i] = new Array(matrix[i].length).fill(0)
        for(let j = 0; j < matrix[i].length;j++){
            if(matrix[i][j] === '1'){
                if(i === 0 || j === 0){ // 这种情况正方形长度最大只可能是1
                    dp[i][j] = 1
                }else{
                    dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1
                    
                }
                maxLength  = Math.max(maxLength ,dp[i][j])
            }
        }
    }
    return maxLength *maxLength 
};
