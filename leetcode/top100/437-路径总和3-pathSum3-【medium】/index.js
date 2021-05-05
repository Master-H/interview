/*
 * @Author: xxx
 * @Date: 2021-01-03 11:10:27
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-03 11:47:43
 * @Description: 文件功能描述
 */
// 给定一个二叉树，它的每个结点都存放着一个整数值。
// 找出路径和等于给定数值的路径总数。
// 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
// 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。
// 示例：
// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// 返回 3。和等于 8 的路径有:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3.  -3 -> 11

var pathSum = function(root, sum) {
    let count = 0
    function travel(root,sum){
        if(!root) return 
        if(root.val === sum){
            count++ // 不return是因为还有啃呢个当前为0了，下面路径还存在2，-2可以继续为0，直到没有节点
        }
        travel(root.left,sum-root.val)
        travel(root.right,sum-root.val)
    }

    function preOrder(root,sum){
        if(!root) return 
        travel(root,sum)
        preOrder(root.left,sum)
        preOrder(root.right,sum)
    }
    preOrder(root,sum)
    return count
};