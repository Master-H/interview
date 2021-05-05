// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3


var isSymmetric = function(root) {
    if(!root) return true
    function help(root1,root2){
        if(!root1 || !root2) return root1 === root2
        if(root1.val !== root2.val) return false
        return help(root1.left,root2.right) && help(root1.right,root2.left)
    
    }

    return help(root.left,root.right)

};