/*
 * @Author: xxx
 * @Date: 2021-01-01 17:06:12
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-01 18:00:46
 * @Description: 文件功能描述
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = null
    function dfs(root,p,q){
        if(!root) return false
        const left = dfs(root.left,p,q)
        const right = dfs(root.right,p,q)
        // 更新公共节点
        if((left && right) || ((left||right) && (root.val === p.val || root.val === q.val))){
            res = root
        }
        // 当前点可能包含p,q但是子要其子数包含p,q即可（因为是从底部遍历上来的）
        return (root.val === p.val || root.val === q.val  ) || left || right
    }
    dfs(root,p,q)
    return res
};