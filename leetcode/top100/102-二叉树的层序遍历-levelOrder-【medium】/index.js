/*
 * @Author: xxx
 * @Date: 2020-12-30 20:13:42
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-30 20:19:44
 * @Description: 文件功能描述
 */
// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层序遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]
var levelOrder = function(root) {
    let queue = [root]
    let res = []
    if(!root) return []
    while(queue.length){
        let list = []
        let len = queue.length
        for(let i = 0; i < len;i++){
            let node = queue.shift()
            list.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(list)
    }
    return res
};

