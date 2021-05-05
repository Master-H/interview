// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

// 示例1:

//  输入：[1, 2, 3, 3, 2, 1]
//  输出：[1, 2, 3]
// 示例2:

//  输入：[1, 1, 1, 1, 2]
//  输出：[1, 2]

var removeDuplicateNodes = function(head) {
    while(!head) return head
    const set = new Set()
    set.add(head.val)
    let pre = head
    let cur = head.next
    while(cur){
        if(set.has(cur.val)){
            pre.next = cur.next
            cur = cur.next
        }else{
            set.add(cur)
            pre = cur
            cur = cur.next
        }
    }
    return head

};