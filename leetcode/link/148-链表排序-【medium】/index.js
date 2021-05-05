// //给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
// 进阶：
// 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

// 思路：nlogn,可以想到归并，快排，二分，v8内核，sort通过归并实现
var sortList = function(head) {
    if(!head) return null
    let list = []
    while(head){
        let temp = head.next
        head.next = null
        list.push(head)
        head = temp
    }
    list.sort((a,b) => (a.val) - (b.val))
    list.reduce((acu,cur) => acu.next = cur)
    return list[0]
};