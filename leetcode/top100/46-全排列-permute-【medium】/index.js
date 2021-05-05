/*
 * @Author: xxx
 * @Date: 2020-12-28 22:22:15
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-28 23:08:23
 * @Description: 文件功能描述
 */
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
var permute = function(nums) {
    let len = nums.length
    let res = []
    function dfs(path,set){
        if(path.length === len){
            return res.push(path.concat()) // 关键path.concat()，不然下次调用path = []
        }
        for(let i = 0; i < len;i++){
            if(!set.has(i)){
                path.push(nums[i])
                set.add(i)
                dfs(path,set)
                path.pop()
                set.delete(i)
            }
            
        }
    }
    dfs([],new Set())
    return res
};
let paths = []
let used = {}
function dfs(path){
    if(path.length === nums.length){
        return paths.push(path.slice())
    }
    for(let val of nums){
        if(!used[val]){
            path.push(val)
            used[val] = true
            dfs(path)
            path.pop()
            used[val] = false
        }
    }
}
dfs([])
return paths

}