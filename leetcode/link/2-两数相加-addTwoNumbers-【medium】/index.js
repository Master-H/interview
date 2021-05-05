// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

//  

// 进阶：

// 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

//  

var addTwoNumbers = function (l1, l2) {
    // 创建虚拟头节点
    let dummyHead = new ListNode(-1);
    // 将虚拟头结点赋值被cur 之后这个cur会不断地向后移动 
    let cur = dummyHead;
    // 总和
    let sum = 0;
    // 进位
    let carry = 0;
    // 这里使用或运算符, 因为两个链表的长度可能会不一样 
    while (l1 || l2) {
      // 首先sum就是两个节点的值添加上进制
      sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      // 进位 很显然 如果sum 大于10 说明进制为1 否则为 0
      carry = sum >= 10 ? 1 : 0
      // 新的链表的下一个节点: 和对10取余
      cur.next = new ListNode(sum % 10);
      // 将cur移动到下一个节点
      cur = cur.next;
      // l1 和 l2 都存在的情况下 也都往后面移动
      l1 && (l1 = l1.next);
      l2 && (l2 = l2.next);
    }
    // 如果最后两个数相加完毕之后还有可能 
    carry && (cur.next = new ListNode(carry));
    // 最后将新链表的头结点返回出去就行
    return dummyHead.next;
  };  
  
