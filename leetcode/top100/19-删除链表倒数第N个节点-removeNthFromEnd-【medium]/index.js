/*
 * @Author: xxx
 * @Date: 2020-12-20 22:58:36
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-27 10:53:02
 * @Description: 文件功能描述
 */
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：
// 给定的 n 保证是有效的。

// 思路：删除节点Y，就是要找前驱节点x，并将 x 的指针指向 y 的后继节点。
// 但由于头节点不存在前驱节点，因此我们需要在删除头节点时进行特殊判断。
// 但如果我们添加了哑节点，那么头节点的前驱节点就是哑节点本身，此时我们就只需要考虑通用的情况即可


var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let slow = dummy
    let fast = dummy
    let offset = n+1 // 为了慢节是倒数第n-1个节点
    while(offset){
        fast = fast.next
        offset--
    }
    while(fast){ // 慢节是倒数第n-1个节点
        slow = slow.next
        fast = fast.next
    }
    slow.next =  slow.next.next
    return dummy.next
};


// var kthToLast = function(head, k) {
//     // 双指针
//     var left = head, right = head;
//     while(k > 0) {
//         right = right.next;
//         k--;
//     }
//     while(right !== null) {
//         left = left.next;
//         right = right.next;
//     }
//     return left.val
  
  
//   };
  
  
  

