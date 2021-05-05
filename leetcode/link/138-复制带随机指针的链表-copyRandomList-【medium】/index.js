
//copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
// 还有一个 random 指针指向链表中的任意节点或者 null

// 理解： 本质就是一个深拷贝
// 解题：哈希表表示映射关系：键是原节点，值是复制的节点
// 算法流出：第一遍遍历，复制每个节点和next指针，并保存源节点-复制节点的映射关系
// 第二遍遍历，通过哈希表获得节点对应的复制节点，更新random指针
var copyRandomList = function(head) {
    if(!head) return null
    let map = new Map()
    let node = head 
    let newHead = new Node(node.val) 
    let newNode = newHead 
    map.set(node,newNode)
    while(node.next){
        newNode.next = new Node(node.next.val) // 因为相当于深拷贝，所以得新开辟空间，不能直接node.next.val
        node = node.next
        newNode = newNode.next;
        map.set(node,newNode)
    }
    // 第二遍遍历，复制random
    node = head
    newNode = newHead
    while(node){
        newNode.random = map.get(node.random)
        node = node.next
        newNode = newNode.next
    }
    return newHead
};