var removeZeroSumSublists = function(head) {
    while(!head) return null
    let map = new Map()
    let dummyHead = new ListNode(null)
    dummyHead.next = head
    let node = dummyHead // 这里从空指针开始的原因，因为有可能第一个头部也不需要[1,2,-3,4,1]-->[4,1]
    let sum = 0 
    while(node){
        sum += node.val
        map[sum] = node  // 相加后连续的值直接覆盖
        node = node.next
    }
    sum = 0 
    node = dummyHead
    while(node ){
        sum += node.val
        node.next = map[sum].next
        node = node.next
    }
    return dummyHead.next
};