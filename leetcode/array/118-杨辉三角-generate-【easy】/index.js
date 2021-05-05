// 在杨辉三角中，每个数是它左上方和右上方的数的和。
// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
var generate = function(numRows) {
    let res = []
    for(let i = 0; i < numRows;i++){
        let row = Array(i+1).fill(1)
        for(let j = 1; j < row.length - 1; j++){ // 最后一个已经填充为1了所以，row.length-1
             row[j] = res[i-1][j-1] + res[i-1][j]
        }
        res.push(row)
    }
    return res
 };