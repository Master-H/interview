
// 给定一棵二叉搜索树，请找出其中第k大的节点。

 

// 示例 1:

// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 4
// 示例 2:

// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1

function kthLargest(root,k){
    let queue = []
    function dfs(root){
        if(!root) return 
        dfs(root.left)
        queue.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return queue[queue.length - k] 
}