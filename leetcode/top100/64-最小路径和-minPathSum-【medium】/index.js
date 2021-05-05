/*
 * @Author: xxx
 * @Date: 2020-12-27 23:25:54
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-28 20:25:41
 * @Description: 文件功能描述
 */
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例 1：
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
// 示例 2：

// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12
// 解题思路：
// 思路
// 状态定义：
// 设dp[i][j]为走到当前位置的最小路径和
// 递推公式：
// 只能向下或向右走，意味着当前格子只能由上边或者左边走过来
// dp[i][j] = Min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
// 初始化
// 第一行第n列和第一列第n行为均原数组值
// 边界条件
// 格子有边界，因此当i==0 或j==0时，i-1和j-1会越界
// i = 0，j != 0时,dp[i][j] = dp[i][j-1]+grid[i][j]
// i !=0，j == 0时,dp[i][j] = dp[i-1][j]+grid[i][j]
// i !=0 && j != 0时,dp[i][j] = Min(dp[i-1][j],dp[i][j-1])+grid[i][j]
// i == 0 && j == 0时,dp[i][j]=grid[i][j]
// 返回值
// dp最后一个元素值


var minPathSum = function(grid) {
    let rows = grid.length
    let columns = rows[0].length
    let dp = Array.from(new Array(rows),() => new Array(columns))
    for(let i = 0; i < rows;i++){
        for(let j = 0; j < columns;j++){
            if(i!=0 && j!=0){
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]
            }else if(i === 0  && j !=0){
                dp[i][j] = dp[i][j-1] +grid[i][j]
            }else if(i!=0 && j=== 0){
                dp[i][j] = dp[i-1][j] + grid[i][j]
            }else{
                dp[i][j] = grid[i][j]
            }
        }
    }
    return dp[rows-1][columns-1]
};

