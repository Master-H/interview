// 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

// 示例 1:

// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
// 示例 2:

// 输入: 1->1->1->2->3
// 输出: 2->3

var deleteDuplicates = function(head) {
    let node = new ListNode(null)
    let fast = head
    let slow = node
    node.next = head
    while(fast && fast.next){
        if(fast.val === fast.next.val){
            let temp = fast.val
            while(fast && fast.val === temp){
                fast = fast.next
            }
            slow.next = fast
        }else{
            fast = fast.next
            slow = slow.next
        }

    }
    return node.next
};