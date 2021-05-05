// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

//  

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：true
// 示例 2：


// 输入：root = [1,2,2,3,3,null,null,4,4]
// 输出：false
// 示例 3：

// 输入：root = []
// 输出：true
// 利用后续遍历优化，判断
// 解题思路： 利用后续遍历二叉树（左右根），从底至顶返回子树最大高度，判定每个子树是不是平衡树 ，如果平衡，则使用它们的高度判断父节点是否平衡，并计算父节点的高度，如果不平衡，返回 -1 。

// 遍历比较二叉树每个节点 的左右子树深度：

// 比较左右子树的深度，若差值大于 1 则返回一个标记 -1 ，表示当前子树不平衡
// 左右子树有一个不是平衡的，或左右子树差值大于 1 ，则二叉树不平衡
// 若左右子树平衡，返回当前树的深度（左右子树的深度最大值 +1 ）
var isBalanced = function(root) {
   
    function dfs(root){
        if(!root) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)
        // liyo
        if(Math.abs(left-right)>1 || left === -1 || right === -1){
            return -1
        }
        return Math.max(left,right )+1

    }
    return dfs(root) !== -1

    
};