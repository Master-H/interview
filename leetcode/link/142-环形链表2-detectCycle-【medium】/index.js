// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

// 说明：不允许修改给定的链表。

var detectCycle = function(head) {
    let fast = head
    let slow = head
    while(fast ){
        if (fast.next == null) { // fast.next走出链表了，说明无环
            return null;
        }
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){ // 第一次相遇
            fast = head
            while(true){
                if(fast === slow) {
                    return slow
                }
                fast = fast.next
                slow = slow.next
            }
        }
    }
    return null
};