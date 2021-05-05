/*
 * @Author: xxx
 * @Date: 2020-12-30 10:42:59
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-30 11:10:43
 * @Description: 文件功能描述
 */
// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

// 示例:

// 输入: nums = [1,2,3]
// 输出:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]
var subsets = function(nums) {
    let res = []
    function dfs(path,idx){
        if(idx=== nums.length){
            res.push([...path])
            return
        }
        // 选择当前元算
        path.push(nums[idx])
        dfs(path,idx+1) // 继续选择当前值，继续递归选择
        path.pop() // 上面结束，回溯
        dfs(path,idx+1) // 不选择当前这条路
    }
    dfs([],0)
    return res
};

