// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 参考：https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/shou-hua-tu-jie-24-liang-liang-jiao-huan-lian-biao/
var swapPairs = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head
    let pre = dummy

    while(head&&head.next){
        let next = head.next
    
        pre.next = next 
        head.next = next.next
        next.next = head
        pre = head
        head =  head.next
    }
    return dummy.next


};
// 递归
// var swapPairs = function (head) {
//     // 递归出口
//     if (!head || !head.next) return head;

//     // 先保存下一个节点，避免丢失
//     const next = head.next;

//     // 下一个递归会返回互换后的第一个节点
//     // head 是当前组互换后的第二个节点，head.next 指向下一组就好
//     head.next = swapPairs(next.next);

//     // 将当前组的两个节点互换
//     next.next = head;

//     // 返回互换后的第一个节点
//     return next;
// };

