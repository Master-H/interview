// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

//  

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：2
// 示例 2：

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5

const minDepth = (root) => {
    if (root == null) {            // 递归到null节点，返回高度0
        return 0;
    }
    if (root.left && root.right) { // 左右子树都存在，当前节点的高度1+左右子树递归结果的较小值
        return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    } else if (root.left) {        // 左子树存在，右子树不存在
        return 1 + minDepth(root.left);
    } else if (root.right) {       // 右子树存在，左子树不存在
        return 1 + minDepth(root.right);
    } else {                       // 左右子树都不存在，光是当前节点的高度1
        return 1;
    }
};

