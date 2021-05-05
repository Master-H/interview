/*
 * @Author: xxx
 * @Date: 2021-01-03 18:40:01
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-03 18:40:01
 * @Description: 文件功能描述
 */
// 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

// 提醒一下，二叉搜索树满足下列约束条件：

// 节点的左子树仅包含键 小于 节点键的节点。
// 节点的右子树仅包含键 大于 节点键的节点。
// 左右子树也必须是二叉搜索树。


const convertBST = (root) => {
    let sum = 0;
    const inOrder = (root) => {
      if (root == null) {  // 遍历到null节点，开始返回
        return;
      }
      inOrder(root.right); // 先进入右子树
  
      sum += root.val;     // 节点值累加给sum
      root.val = sum;      // 累加的结果，赋给root.val
  
      inOrder(root.left);  // 然后才进入左子树
    };
    inOrder(root); // 递归的入口，从根节点开始
    return root;
  }
  