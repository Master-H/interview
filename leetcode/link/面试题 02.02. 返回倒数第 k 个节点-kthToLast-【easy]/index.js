
//题目： 链表中倒数第k个节点
//关键： head不存在，链表长度小于k导致程序崩溃的边界条件
// 栈方法
function kthToLast(head,k) {
    let stacks = []
    let ans = null
    while(head){
      stacks.push(head)
      head = head.next
    }
    while(k>0){
      ans = stacks.pop()
      k--
    }
    return ans.val
    
  }
  
  // 链表方法, 倒数第k个，就是正数的第n-k+1,也就是正数走k次,可以画图

  var kthToLast = function(head, k) {
    // 双指针
    var left = head, right = head;
    while(k > 0) {
        right = right.next;
        k--;
    }
    while(right !== null) {
        left = left.next;
        right = right.next;
    }
    return left.val
  
  
  };
  
  
  