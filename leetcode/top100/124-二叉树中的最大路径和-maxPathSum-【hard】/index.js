/*
 * @Author: xxx
 * @Date: 2020-12-31 10:29:13
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-31 11:13:54
 * @Description: 文件功能描述
 */
// 给定一个非空二叉树，返回其最大路径和。

// 本题中，路径被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
// 示例 1：
// 输入：[1,2,3]
//        1
//       / \
//      2   3

// 输出：6
// 示例 2：

// 输入：[-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// 输出：42

// 解题思路参考：https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/shou-hui-tu-jie-hen-you-ya-de-yi-dao-dfsti-by-hyj8/
// 关键思路：1、算出每个点存在的路径的最大值取最大的，算的过程中如
// 路径停在当前子树的根节点，收益：root.val
// 走入左子树，最大收益：root.val + dfs(root.left)
// 走入右子树，最大收益：root.val + dfs(root.right)

// 题目说，路径不一定经过根节点，说明，最大路径和可能产生于局部子树中

// 因此每次递归调用，都求一下当前子树内部的最大路径和，每个子树都求，找最大的。

// 注意: 一个子树内部的路径，要包含当前子树的根节点。如果不包括根节点，那还算什么当前子树的路径，而是当前子树的子树的内部路径。

// 所以，属于一个子树内部的最大路径和 = 
// 左子树提供的最大路径和 + 根节点值 + 右子树提供的最大路径和。即 dfs(root.left) + root.val + dfs(root.right);



var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER
    function dfs(root){
        // 递归终止
        if(!root){
            return 0
        }

        const left = dfs(root.left)// 左子树提供的最大收益
        const right = dfs(root.right)// 右子树提供的最大收益

        const innerMax = root.val + left + right // 当前点最大的路径和
        maxSum = Math.max(maxSum,innerMax)

        const outerMax = root.val+ Math.max(left,right)  // 对外提供的最大和

        if(outerMax<0){
            return 0
        }
        return outerMax


    }
    dfs(root)
    return maxSum
};
