// 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回锯齿形层序遍历如下：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]

var zigzagLevelOrder = function(root) {
    let res = []
     let queue = [root]
     if(!root) return res
     while(queue.length){
         let len = queue.length
         let path = []
         while(len){
             let node = queue.shift()
             path.push(node.val)
             if(node.left) queue.push(node.left)
             if(node.right) queue.push(node.right)
             len--
         }
         res.push(path)
     }
     return res.map((item,idx) => idx%2===1 ? item.reverse():item)
 };