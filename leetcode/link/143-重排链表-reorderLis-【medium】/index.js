// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例 1:

// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
// 示例 2:

// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

// 思路： 入栈，然后出栈，出队列，栈--队列
var reorderList = function(head) {
    let list = []
    let cur = head
    let tail;
    while(cur) {
        const tempCur = cur;
        // js链表其实是嵌套结构，不宜把next也引入，所以由数组自然顺序接替链表顺序,next清空
        cur = cur.next
        tempCur.next = null
        list.push(tempCur)
    }
    while(list.length){
        cur = list.shift()
        tail = list.pop()
        if(tail){
            cur.next = tail
            tail.next = list.length ? list[0]:null
        }else{
            cur.next = null
        }
        
    }
};
