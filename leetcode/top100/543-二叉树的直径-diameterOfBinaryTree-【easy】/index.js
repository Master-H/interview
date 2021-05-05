/*
 * @Author: xxx
 * @Date: 2020-12-27 22:35:27
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-27 23:12:16
 * @Description: 文件功能描述
 */
// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

// 示例 :
// 给定二叉树

//           1
//          / \
//         2   3
//        / \     
//       4   5    
// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

// 关键最长直径，是指任意两个节点的最大距离
var diameterOfBinaryTree = function(root) {
    let res = 0
    function getDepth(root){
        if(!root) return 0
        let left = getDepth(root.left)
        let right = getDepth(root.right)
        // 获取该树的最长路径和现有最长路径中最大的那个，因为有可能存在不是以根节点的最大距离
        res = Math.max(left+right,res)
        // 已知根节点的左右子树的深度，
        // 则，左右子树深度的最大值 + 1，
        // 便是以根节点为数的最大深度*/
        return Math.max(left,right) + 1
    }
    getDepth(root)
    return res
};

// 方法二
function diameterOfBinaryTree(root){
    let max = 0
    function dfs(root){
        if(!root) return 
        let left = getDepth(root.left)
        let right = getDepth(root.right)
        max = Math.max(left+right,max)
        dfs(root.left)
        dfs(root.right)
        
    }
    function getDepth(root){
        if(!root) return 0
        return Math.max(getDepth(root.left),getDepth(root.right)) + 1
    }
    dfs(root)
    return max
}