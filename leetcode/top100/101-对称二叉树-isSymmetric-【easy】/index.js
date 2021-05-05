/*
 * @Author: xxx
 * @Date: 2020-12-27 16:47:33
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-27 16:57:54
 * @Description: 文件功能描述给定一个二叉树，检查它是否是镜像对称的。
*/
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//  

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//     1
//    / \
//   2   2
//    \   \
//    3    3

var isSymmetric = function(root) {
    if(!root) return true
    function help(root1,root2){
        // 递归终止条件，只要有一个不存在
        if(!root1 || !root2) return root1 === root2
        // 某个节点值不一样终止
        if(root1.val !== root2.val) return false
        return( help(root1.right,root2.left) && help(root1.left,root2.right))
    }
    return help(root.left,root.right)
};