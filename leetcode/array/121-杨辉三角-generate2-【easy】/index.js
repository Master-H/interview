// \给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
// 输入: 3
// 输出: [1,3,3,1]
let getRow = function(rowIndex) {
    let res = [1]
    for(let i = 0 ;i < rowIndex;i++){
        res.unshift(0)
        for(let j = 0 ;j < i+1;j++){
            res[j] = res[j] + res[j+1]
        }
    }
    return res
};

