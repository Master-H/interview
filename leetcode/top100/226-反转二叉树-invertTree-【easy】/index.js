/*
 * @Author: xxx
 * @Date: 2020-12-27 21:01:51
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-27 21:02:02
 * @Description: 文件功能描述
 */
// 翻转一棵二叉树。

// 示例：

// 输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
var invertTree = function(root) {
    if(!root) return root
    let temp = root.right
    root.right =invertTree(root.left)
    root.left = invertTree(temp)
    return root
};
