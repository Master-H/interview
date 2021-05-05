// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？


// 栈方法时间：o（n) 空间：o(n)
var reverseList = function(head) {
    let list = []
    while(head){
        list.unshift(head.val)
        head = head.next
    }
    let headNode = new ListNode(list[0])
    let pre = headNode
    for(let i = 1; i < list.length;i ++){
        let node = new ListNode(list[i]) 
        pre.next = node
        pre =  node 
    }
    return headNode
};

// 
// 链表方法：o（n) 空间：o(1)
var reverseList = function(head) {
    let pre = null
    let current = head
    while(current){
        let tempNext = current.next
        // 反转
        current.next = pre
        // 移动更新pre和cur
        pre = current
        current = tempNext
    }
    return  current

   
};
const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}


