//输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

//B是A的子结构， 即 A中有出现和B相同的结构和节点值。
// 给定的树 A:

//      3
//     / \
//    4   5
//   / \
//  1   2
// 给定的树 B：

//    4 
//   /
//  1
// 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

// 示例 1：

// 输入：A = [1,2,3], B = [3,1]
// 输出：false

var isSubStructure = function(A, B) {
    if(!A||!B) return false
    function isSameTree(A,B){
        if(!B) return true //B为空，说明B遍历完了，A还没有包含B
        if(!A) return false
        if(A.val !== B.val) return false
        return isSameTree(A.left,B.left) && isSameTree(A.right,B.right)
    }
    return isSameTree(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B)
};