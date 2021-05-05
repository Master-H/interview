/*
 * @Author: xxx
 * @Date: 2020-12-31 18:41:05
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-31 19:48:14
 * @Description: 文件功能描述
 */
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

// 说明：不允许修改给定的链表。

// 进阶：

// 你是否可以使用 O(1) 空间解决此题？
// 示例 1：-4指向2
// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。

// 解题思路关键：参考

// 1、快指针走2步骤，慢指针走1步，如果有环二者肯定会相遇（操场跑圈）
// 2、假设head到环入口a步长，环b步长
// 2、假设慢指针走s步，二者相遇：https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/
// 那么此时：
// 快指针：f = 2s
// 慢指针：s
// 快指针比慢指针多走nb个环：f = 2 + nb ==> s = nb
// 能到环入口的走的距离：a + nb //a未知

// 第一相遇后：s=nb
// 所以只要s再周a步即可到环入口，所以此时让那个fast从head开始走a步，此时慢指针走了a+nb所以二者相遇，同事得到入口点

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
    return null // why?
};