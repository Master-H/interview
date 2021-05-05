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

// 思路： 前序第一个肯定是根节点，然后中序当中该根节点值左边是左子树，右边右子数
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null
    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid+1))
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid+1))
    return root
};



  
var buildTree = function(inorder, postorder) {
    
};