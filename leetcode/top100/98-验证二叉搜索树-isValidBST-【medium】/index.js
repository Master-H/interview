/*
 * @Author: xxx
 * @Date: 2020-12-30 17:01:56
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-30 17:29:55
 * @Description: 文件功能描述
 */
// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 示例 1:

// 输入:
//     2
//    / \
//   1   3
// 输出: true
// 示例 2:

// 输入:
//     5
//    / \
//   1   4
//      / \
//     3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
//      根节点的值为 5 ，但是其右子节点值为 4 。

// 二叉搜索树根据中序遍历得是升序
var isValidBST = function(root) {
    let result = true
    let pre = -Infinity
    function DFS(root){
        if(!root || !result) return 
        DFS(root.left)
        if(root.val <= pre) result = false
        pre = root.val
        DFS(root.right)
    }
    DFS(root)
    return result
};