/*
 * @Author: xxx
 * @Date: 2021-01-01 09:59:10
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-01 10:17:30
 * @Description: 文件功能描述
 */

// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。
// 示例 1：
// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1
// 示例 2：

// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3

// 解题思路
// 目标是找到矩阵中 “岛屿的数量” ，上下左右相连的 1 都被认为是连续岛屿。
// dfs方法： 设目前指针指向一个岛屿中的某一点 (i, j)，寻找包括此点的岛屿边界。
// 从 (i, j) 向此点的上下左右 (i+1,j),(i-1,j),(i,j+1),(i,j-1) 做深度搜索。
// 终止条件：
// (i, j) 越过矩阵边界;
// grid[i][j] == 0，代表此分支已越过岛屿边界。
// 搜索岛屿的同时，执行 grid[i][j] = '0'，即将岛屿所有节点删除，以免之后重复搜索相同岛屿。


var numIslands = function(grid) {
    let res = 0
    let rows = grid.length;
    let columns = grid[0].length
    for(let i = 0; i< rows; i++){
        for(let j = 0; j < columns;j++){
            if(grid[i][j] === '1'){
                helper(i,j,rows,columns)
                res++
            }
        }
    }
    function helper(i,j,rows,columns){
        // 终止条件,越界、为0
        if(i>rows-1 || j>columns-1 || i<0 || j<0 || grid[i][j] === '0'){
            return
        }
        grid[i][j] = '0' // 已经访问过的置为0，防止重新访问
        //继续递归
        helper(i+1,j,rows,columns)
        helper(i,j+1,rows,columns)
        helper(i-1,j,rows,columns)
        helper(i,j-1,rows,columns)
    }
    return res
};
