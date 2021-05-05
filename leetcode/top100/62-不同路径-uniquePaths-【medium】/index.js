/*
 * @Author: xxx
 * @Date: 2020-12-29 23:28:06
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-29 23:35:03
 * @Description: 文件功能描述
 */
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？
// 输入：m = 3, n = 7
// 输出：28
//  
// 由于我们每一步只能从向下或者向右移动一步，因此要想走到 (i, j)，如果向下走一步，那么会从 (i-1, j) 
// 走过来；如果向右走一步，那么会从 (i,j−1) 走过来。因此我们可以写出动态规划转移方程

// f(i,j)=f(i−1,j)+f(i,j−1)
// 如果 i=0，那么 f(i-1,j) 并不是一个满足要求的状态，我们需要忽略这一项
// 为了方便代码编写，我们可以将所有的 f(0, j) 以及 f(i, 0) 都设置为边界条件，它们的值均为 1

var uniquePaths = function(m, n) {
    let dp = Array.from(new Array(m),() => new Array(n).fill(0))
    for(let i = 0; i<m;i++){
        dp[i][0] = 1
    }
    for(let i = 0; i<m;i++){
        dp[0][j] = 1
    }
    for(let i =1; i<m;i++){
        for(let j=1;j < n;j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m][j]
};
var uniquePaths = function(m, n) {
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        f[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        f[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
    }
    return f[m - 1][n - 1];
};


