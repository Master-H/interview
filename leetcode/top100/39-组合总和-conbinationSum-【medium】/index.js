/*
 * @Author: xxx
 * @Date: 2020-12-28 21:36:09
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-28 22:16:25
 * @Description: 文件功能描述
 */
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。
// 说明：
// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1：

// 输入：candidates = [2,3,6,7], target = 7,
// 所求解集为：
// [
//   [7],
//   [2,2,3]
// ]
// 示例 2：

// 输入：candidates = [2,3,5], target = 8,
// 所求解集为：
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

// 解题思路参考：https://leetcode-cn.com/problems/combination-sum/solution/zu-he-zong-he-by-leetcode-solution/
// 那么在当前的函数中，每次我们可以选择跳过不用第 idx 个数，即执行 dfs(target, combine, idx + 1)。
// 也可以选择使用第 idx 个数，即执行 dfs(target - candidates[idx], combine, idx)，
// 注意到每个数字可以被无限制重复选取，因此搜索的下标仍为 idx

var combinationSum = function(candidates, target) {
    let res = []
    function dfs(target,combine,idx){
        let cur = candidates[idx]
        if(idx === candidates.length){
            return 
        }
        if(target === 0){
            res.push(combine)
            return 
        }
        // 跳过当前
        dfs(target,[...combine],idx+1)
        // 选择当前
        if(target - cur >=0){
            dfs(target - cur,[...combine,cur],idx)
        }
        
    }
    dfs(target,[],0)
    return res
};