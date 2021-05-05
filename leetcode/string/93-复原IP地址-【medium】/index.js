// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

// 有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

//  

// 示例 1：

// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]


// DFS + 剪纸

var restoreIpAddresses = function(s) {
    let result = []
    let len = s.length
    function dfs(subRes,start){
        // 递归结束条件
        if(subRes.length === 4 && start==len){
            result.push(subRes.join('.'))
        }
        if(subRes.length === 4 && start<len) return // 字段未耗尽

        for(let i = 1; i <=3;i++){
            if(start + i -1 >= len) return // 长度越界
            if(i !== 1 && s[start] == 0) return // 不能有0x 0xx
            const str  = s.substring(start,start+i)
            if(i === 3 && +str >255) return
            subRes.push(str)
            dfs(subRes,start+i) 
            subRes.pop()
        }
    }
    dfs([],0)
    return result
};