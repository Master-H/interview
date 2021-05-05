// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:

// 输入: 1->1->2
// 输出: 1->2
// 示例 2:

// 输入: 1->1->2->3->3
// 输出: 1->2->3


var deleteDuplicates = function(head) {
    let map = new Map()
    let pre = new ListNode(null)
    let cur = head
    pre.next = cur
    while(cur){
        if(map.has(cur.val)){
            pre.next = cur.next
            cur= cur.next
        }else{
            map.set(cur.val,true)
            pre = cur
            cur = cur.next
             
        }
        
    }
    return head
};