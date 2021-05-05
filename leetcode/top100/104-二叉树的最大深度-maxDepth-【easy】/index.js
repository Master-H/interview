/*
 * @Author: xxx
 * @Date: 2020-12-30 20:43:31
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-30 22:40:55
 * @Description: 文件功能描述
 */
// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

// BFS
var maxDepth = function(root) {
    if(!root) return 0
    let queue = [root]
    let depth = 0
    while(queue.length){
        depth++
        let len = queue.length
        for(let i =0; i<len;i++){
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return depth

};
//DFS
var maxDepth = function(root) {
    function dfs(root){
        if(!root) return 0
        return Math.max(dfs(root.left),dfs(root.right)) + 1
    }
    dfs(root)

}