// 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。

// 请你将 list1 中第 a 个节点到第 b 个节点删除，并将list2 接在被删除节点的位置。

var mergeInBetween = function(list1, a, b, list2) {
    let count = 0
    let cur = list1
    // 先走到a前一个节点
    for (let i = 0; i < a - 1; i++){ // 注意a-1
        cur = cur.next 
    }
   
    let node = cur.next   // a节点
    for(let i=a;i < b+1;i++){ // 走到b下一个节点,注意b+1
        node = node.next
    }
    cur.next = list2
    while(cur.next){ // 遍历走完list2
        cur = cur.next
    }
    cur.next = node
    return list1
}