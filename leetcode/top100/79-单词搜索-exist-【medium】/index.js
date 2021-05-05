/*
 * @Author: xxx
 * @Date: 2020-12-30 16:00:50
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-30 17:00:25
 * @Description: 文件功能描述
 */
// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
// 示例:
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false

// 解题思路参考：https://leetcode-cn.com/problems/word-search/solution/shou-hua-tu-jie-79-dan-ci-sou-suo-dfs-si-lu-de-cha/
var exist = function(board, word) {
    let rows = board.length
    let columns = board[0].length
    let used = Array.from(new Array(rows),() => new Array(columns).fill(false))

    function canFind(row,column,idx){
        // 递归结束
        if(idx === word.length){
            return true
        }
        // 递归越界
        if(row <0 || row >=rows || column < 0 || column >= columns){
            return false
        }
        // 不满足条件，重复使用，当前值不等于workd对应位置的值递归终止
        if(used[row][column] || board[row][column] !== word[idx]){
            return false
        }
        // 没有终止，标记当前点已经使用过
        used[row][column] = true
        // 继续递归
        const canFindRest = canFind(row-1,column,idx+1)||canFind(row+1,column,idx+1)||canFind(row,column-1,idx+1)||canFind(row,column+1,idx+1)

        // 基于当前点满足条件，则继续递归寻找其他条件
        if(canFindRest){
            return true
        }
        // 基于当前点不满足，那么将当前点置为未使用，因为其他路径有可能可以用
        used[row][column] = false
        return false
    }

    // 寻找入口点
    for(let i = 0;i < rows;i++){
        for(let j = 0; j < columns;j++){
            if(board[i][j] === word[0] && canFind(i,j,0)){ 
                return true // 基于当前点是有路径的
            }
        }
    }
    return false
};