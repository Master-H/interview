// 根据一棵树的前序遍历与中序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7



constructFromPrePost = function(pre, post) {
    if(!pre.length) return 
   let rootVal = pre[0] // 根节点
   let index =  post.indexOf(pre[1]) // 寻找左节点
   let root = new TreeNode(rootVal)
   root.left = constructFromPrePost(pre.slice(1,index+2),post(slice(0,index+1)))
   root.right = constructFromPrePost(pre.slice(index+2),post(slice(index+1,post.length-1)))
    return root
   
};