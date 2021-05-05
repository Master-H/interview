// 给定一个头结点为 root 的链表, 编写一个函数以将链表分隔为 k 个连续的部分。

// 每部分的长度应该尽可能的相等: 任意两部分的长度差距不能超过 1，也就是说可能有些部分为 null。

// 这k个部分应该按照在链表中出现的顺序进行输出，并且排在前面的部分的长度应该大于或等于后面的长度。

// 返回一个符合上述规则的链表的列表。

// 举例： 1->2->3->4, k = 5 // 5 结果 [ [1], [2], [3], [4], null ]

// 示例 1：

// 输入: 
// root = [1, 2, 3], k = 5
// 输出: [[1],[2],[3],[],[]]
// 解释:
// 输入输出各部分都应该是链表，而不是数组。
// 例如, 输入的结点 root 的 val= 1, root.next.val = 2, \root.next.next.val = 3, 且 root.next.next.next = null。
// 第一个输出 output[0] 是 output[0].val = 1, output[0].next = null。
// 最后一个元素 output[4] 为 null, 它代表了最后一个部分为空链表。
// 示例 2：

// 输入: 
// root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
// 输出: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
// 解释:


var splitListToParts = function(root, k) {
    let res = Array(k).fill(null)
    let len = 0
    let head = root
    let node = root
    while(node){
        len++
        node = node.next
    }
    let smallLen = parseInt(len/k)  // 每个平局段长度
    let bigLen = len % k // 大于平均树的次数
    // head !== null ，因为存在root = [1,2,3],k=5,到第三个时候其实没必要走循环了
    for(let i = 0; head!== null && i < k; i++){
        res[i] = head
        let bigList = smallLen + (bigLen-- > 0 ? 1 : 0)
        while(bigList>1){
            head = head.next
            bigList--
        }
        let next = head.next
        head.next = null
        head = next

    }
    return res

};