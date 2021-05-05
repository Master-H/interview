/*
 * @Author: xxx
 * @Date: 2020-12-30 22:43:52
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-30 23:14:40
 * @Description: 文件功能描述
 */
// 给定一个二叉树，原地将它展开为一个单链表。
// 例如，给定二叉树
//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// 将其展开为：

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6
// 前序遍历
var flatten = function(root) {
    let list = []
    preOrder(root)
    let len = list.length
    for(let i = 1 ;i < len;i++){
        let pre = list[i-1]
        let cur = list[i]
        pre.left = null
        pre.right = cur
    }
    
    function preOrder(root){
        if(root !== null) {
            list.push(root)
            preOrder(root.left)
            preOrder(root.right)
        }
       
    }

};
