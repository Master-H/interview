// 给定一个二叉树，返回所有从根节点到叶子节点的路径。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:

// 输入:

//    1
//  /   \
// 2     3
//  \
//   5

// 输出: ["1->2->5", "1->3"]

// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
// DFS加回溯


var binaryTreePaths = function(root) {
    let res = []  
    function dfs(root,path){
        if(!root) return 
        path.push(root.val)
        if(root.left) dfs(root.left,path)
        if(root.right) dfs(root.right,path)
        if(!root.left && !root.right){
            res.push(path.join('->'))
        }
        path.pop() // 回溯
    }
    dfs(root,[])
    return res
};