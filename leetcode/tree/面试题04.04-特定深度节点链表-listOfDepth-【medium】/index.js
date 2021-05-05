// 给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。
// 示例：
// 输入：[1,2,3,4,5,null,7,8]

//         1
//        /  \ 
//       2    3
//      / \    \ 
//     4   5    7
//    /
//   8
// 输出：[[1],[2,3],[4,5,7],[8]]

function listOfDepth(root){
    let res = []
    let queue = [root]
    while(queue.length){
        let len = queue.length
        let root = new ListNode()
        let head = root
        while(len){
            len--
            let node = queue.shift()
            if(!node) continue
            head.next = new ListNode(node.val)
            head = head.next
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        root.next && res.push(root.next)
    }
    return res
}

