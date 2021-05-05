// 前序遍历，根左右
// 递归时间o n，空间也是o n
// 跑不通?
function preOrder(root,arr) {
  let list = []
  function traversal(root) {
    if(root){
      list.push(root.val)
      traversal(root.left)
      traversal(root.right)
    } 
  }
  traversal(root)
  return list
}
// 前序迭代也是on,可以跑通
var preorder = function(root) {
  if (root === null) {
      return []
  }
  let array = []
  let queue = [root]
  while (queue.length) {
      let node = queue.shift()
      array.push(node.val)
      if (node.children.length > 0) {
          queue = node.children.concat(queue) 
      }
  }
  return array

};


