// 两个链表的第一个公共节点



var getIntersectionNode = function(headA, headB) {
    let node1 = headA
    let node2 = headB
    while(node1 !== node2){
        node1 = node1 === null ? headB: node1.next 
        node2 = node2 === null ? headA: node2.next 
    }
    return node1
};
