// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
var levelOrder = function(root) {
    let res = []
    if(!root) return res
    let queue = [root]
    while(queue.length){
        let len = queue.length
        let levelList = []
        while(len){
            let node = queue.shift()
            levelList.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            len--
        }
        res.push(levelList)
       

    }
    return res
};
