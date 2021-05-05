// DFS
function dfs(root){
    if(!root) return 0
    return Math.max(dfs(root.left),dfs(root.right))+1
}

// BFS
var maxDepth = function(root) {
    function bfs(root){
        if(!root) return 0
        let queue = [root]
        let depth = 0
        while(queue.length){
            depth++
            let temp = []
            for(let i = 0; i < queue.length;i++){
                let left = queue[i].left
                let right = queue[i].right
                if(left) temp.push(left)
                if(right) temp.push(right)
            }
            queue = temp
        }
        return depth
    }
    return bfs(root)

}