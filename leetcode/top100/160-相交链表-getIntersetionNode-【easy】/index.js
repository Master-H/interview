/*
 * @Author: xxx
 * @Date: 2020-12-27 20:28:30
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-27 20:29:40
 * @Description: 文件功能描述
 */
// 编写一个程序，找到两个单链表相交的起始节点。

var getIntersectionNode = function(headA, headB) {
    let map = new Map()
    while(headA){
        map.set(headA,true)
        headA = headA.next
    }
    while(headB){
        if(map.has(headB)) return headB
        headB = headB.next
    }
};