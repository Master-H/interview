const inorderTraversal = (root) => {
  // 1. 设置结果集
  const result = [];

  // 2. 递归
  const inorderTraversal = (root) => {
    const result = [];
    function recursion  (root)  {
      if (!root) {
        return;
      }
      recursion(root.left);
      result.push(root.val);
      recursion(root.right);
    };
    recursion(root);
    return result;
  };
  // 2. 迭代
  const inorderTraversal = (root) => {
    // 1. 设置结果集
    const result = [];
  
    // 2. 设置栈队列
    const stack = [];
  
    // 3. 遍历
    while (root || stack.length) {
      // 3.1 栈添加左子树
      while (root) {
        stack.push(root);
        root = root.left;
      }
  
      // 3.2 推出
      root = stack.pop();
  
      // 3.3 获取值
      result.push(root.val);
  
      // 3.4 转换右子树
      root = root.right;
    }
  
    // 4. 返回结果集
    return result;
  };
  
  
