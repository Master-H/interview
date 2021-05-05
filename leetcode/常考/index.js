// 反转链表
var reverseList = function(head) {
    let pre = null
    let cur = head
    while(cur){
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
}
// 215 数组中第k大的元素
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => a-b)
    return nums[k-1]
}
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => a-b)
    return nums[k-1]
}
// 3-无重复最长子字符串-medium

var lengthOfLongestSubstring = function(s) {
    let arr = []
    let max = 0
    for(let val of s){
        let index = arr.indexOf(val)
        if(index !== -1){ // 存在
           arr.splice(0,index+1)
        }
        arr.push(val)
        
        max = Math.max(max,arr.length)
    }
    return max
}

// 三数之和

function threeSum(arr){
    let res = []
    
    arr.sort((a,b) => a - b)
    // 处理边界条件
    if(arr ===  null || arr.length < 3) return res
    for(let i = 0;i < arr.length;i++){
        if(res[i] > 0 ) return res
        if(i > 0 && arr[i] === arr[i-1]) continue
        let r = arr.length - 1
        let l = i + 1
        while(l<r){
            let sum = arr[i]+arr[l] + arr[r]
            if(sum === 0){
                res.push([arr[i],arr[l],arr[r]])
                while(arr[l] === arr[l+1]) l++
                while(arr[r] === arr[r-1]) r--
                l++
                r--
            }else if(sum < 0){
                l++
            }else{
                r--
            }
        }
    }
    return res
}

// 121-买卖股票的最佳时机-【easy】
var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0
    for(let val of prices){
        min = Math.min(min,val)
        max = Math.max(max,val - min) 
    }
    return max
}
// 1-两数之和
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
const twoSum = (arry,target) => {
    let obj = {}
    for([key,val] of arry.entries()){
        let remain = target - val
        if(obj[remain] === undefined){ // 不能直接用存在与否判断因为有可能值为0
            obj[val] = key
        }else{
            return [obj[remain],key]
        }
    }

}
// 415-字符串相加-【easy】
var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let add = 0
    let result = []
    while(i >= 0 || j >= 0 || add != 0){
        const x =  i >= 0 ? num1.charAt(i) - '0' : 0 // - '0'是处理，越界i设置其值为0
        const y =  j >= 0 ? num2.charAt(j) - '0' : 0
        const sum  = x + y + add
        result.push(sum%10)
        add = Math.floor(sum/10)
        console.log(result)
        i--
        j--
    }
    return result.reverse().join('')
};
// 53-最大子序和-【easy】,数组至少有一个元素
var maxSubArray = function(nums){
    let dp = new Array(nums.length).fill(0)
    let max = nums[0]
    dp[0] =  nums[0]
    for(let i = 1; i < nums.length;i++){
        dp[i] = Math.max(dp[i- 1] + nums[i], nums[i]);
        max = Math.max(dp[i],max)
    }
    return max
}
// 20-有效的括号
// 输入：s = "()[]{}"
// 输出：true

var isValid = function (s) {
    let obj = {
        '(':')',
        '{':'}',
        '[':']',
    }
    let queue = []
    for(let val of s){
        if(!obj[val]){
            if(!queue.length) return false
            let last = queue[queue.length-1]
            if(obj[last] !== val) return false
            queue.pop()
        }else{
            queue.push(val)
        }
    }
    return queue.length === 0
}

// 有效岛屿的数量

var numIslands = function(grid) {
    let rows = grid.length
    let columns = grid[0].length
    let res = 0
    for(let i = 0; i < rows;i++){
        for(let j = 0; j < columns;j++){
            if(grid[i][j] === '1'){
                helper(i,j,rows,columns)
                res++
            }
        }
    }
    function helper(i,j,rows,columns){
        if(i > rows - 1 || j >columns -1 || i <0 || j < 0 || grid[i][j] === '0') return
        grid[i][j] === '0'
        helper(i+1,j,rows,columns)
        helper(i-1,j,rows,columns)
        helper(i,j+1,rows,columns)
        helper(i,j-1,rows,columns)
    }
    return res
}
// 69-x的平方根-【easy】
var mySqrt = function(x) {
    if(x < 2) return x // 边界条件0，1的平方根是自己
    let left = 1
    let right = x >>>1 // 缩小范围
    while(left+1 < right){
        let mid = (left + right) >>> 1
        if(mid == x/mid){
            return mid
        }else if(mid < x/mid){
            left = mid
        }else{
            right = mid
        }
    }
    return right > x/right ? left : right
};
// 88-合并两个有序的数组
var merge = function(nums1, m, nums2, n) {
    let len1 = m-1
    let len2 = n-1
    let len = m + n -1
    while(len1 >=0 && len2>=0){
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
    }
   nums1.splice(0,len2+1,...nums2.slice(0,len2+1))
}
// 42-接雨水-【hard]
var trap = function(height) {
    let len = height.length
    let leftMax = []
    let rightMax = []
    let res = 0
    leftMax[0] = height[0]
    for(let i = 1; i <len;i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i])
    }
    rightMax[len-1] = height[len-1]
    for(let i = len-2; i >=0;i--){
        rightMax[i] = Math.max(rightMax[i+1],height[i])
    }
    for(let i = 0; i < len;i++){
        res +=  Math.min(leftMax[i],rightMax[i]) - height[i]
    }
    return res
};
// 33-搜索旋转排序数组-【medium】
var search = function(nums, target) {
    let len = nums.length
    if(len === 0) return -1
    let l = 0
    let r = len -1
    while(l <= r){
        let mid = (l+r) >> 1
        if(nums[mid] ===  target)return mid
        if(nums[l] <= nums[mid]){ // 升序
            if(nums[l]<=target && target <= nums[mid]){
                r = mid - 1
            }else{
                l = mid + 1
            }
        }else{
           if(nums[mid] <= target && target <= nums[r]){
               l = mid + 1
           }else{
               r = mid - 1
           }
           
        }
    }
    return -1
}
// 151-反转字符串里面的单词-【medium】
var reverseWords = function(s) {
    let arr = s.trim().split(/\s+/)
    return arr.reverse().join(' ')
};
// 最长回文子串
// [56765]
var longestPalindrome = function(s) {
    let len = s.length
    let dp = Array.from(new Array(len),() => new Array(len).fill(0))
    let res = ''
    for(let i = len-1;i >=0;i--){
        for(let j=i;j<len;j++){
            dp[i][j] =  s[i] === s[j] && (j-i<2 || dp[i+1][j-1])
            if(dp[i][j] && j-i+1 > res.length){
                res = s.substring(i,j+1)
            }
        }
    }
    return res
}
// 

// 合并区间
var merge = function(intervals) {
    let len = intervals.length
    intervals.sort((a,b) => a[0] - b[0])
    let res = [intervals[0]]
    for(let i = 1; i <len;i++){
        if(res[res.length-1][1] < intervals[i][0] ){
            res.push(intervals[i])
        }else{
            if(res[res.length-1][1] < intervals[i][1]){
                res[res.length-1][1] = intervals[i][1]
            }
        }
    }
    return res
}
//300-最长递增序列-【medium】
var lengthOfLIS = function(nums) {
    let len = nums.length
    let max = 1
    let dp = new Array(len).fill(1)
    for(let i = 1; i < len;i++){
        for(let j = 0; j <i;j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
        }
        max = Math.max(dp[i],max)
    }
    
    return max
}

//1143-最长公共子序列-【medium】
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length
    let n = text2.length
    // m+1与n+1,不加1你就会用其它限制条件来确保这个index是有效
    let dp = Array.from(new Array(m+1),() => new Array(n+1).fill(0))
    for(let i=1;i<m+1;i++){
        for(let j=1;j<n+1;j++){
            // 找到1个LCS的元素，则在之前的长度加1（i是从1开始的，所以取对应索引的值需要减1）
            if(text1[i-1] === text2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
            }else{
                // 至少有一个字符不在LCS中；（这里没有比较dp[i-1][j-1]，因为它在三者中三最小的，没有必要比较）
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[m][n]
};
// 41-缺失的一个正数-【hard】
var firstMissingPositive = function(nums) {
    let result = 1
    while(nums.includes(result)){
        result++
    }
    return result
};
// 169-多数元素-【easy】
var majorityElement = function(nums) {
    let temp = 0
    let count = 0
    for(let val of nums){
        if(count === 0) temp = val
        count += temp === val ?  1 : -1
    }
    return temp
}
// 46-全排列-【medium】
var permute = function(nums) {
    let paths = []
    let used = {}
    function dfs(path){
        if(path.length === nums.length){
            return paths.push(path.slice())
        }
        for(let val of nums){
            if(!used[val]){
                path.push(val)
                used[val] = true
                dfs(path)
                path.pop()
                used[val] = false
            }
        }
    }
    dfs([])
    return paths
    
}
// 128-最长连续序列-【hard】
var longestConsecutive = function(nums) {
    let set = new Set()
    let max = 0
    for(let val of nums){
        set.add(val)
    }
    for(let val of set){
        if(!set.has(val-1)){
            let cur = val
            let count = 1
            while(set.has(cur+1)){
                count++
                cur +=1
            }
            max = Math.max(max,count)
        }
       
    }
    return max

}
// 70-爬楼梯-【easy】
var climbStairs = function(n) {
    let dp = [1,1]
    for(let i = 2;i<n+1;i++){
        dp[i] = dp[i-1]+ dp[i-2] 
    }
    return dp[n]

}
// 剑指offer21-奇数在前面
var exchange = function(nums) {
    const length = nums.length;
    let left = 0;
    let right = length - 1
    while(left <= right){
        if(nums[left]%2 === 1){
            left++ // 寻找偶数
            continue
           
        } 
       if(nums[right]%2 === 0 ){
            right-- // 寻找奇数
            continue
            
        }
        [nums[right],nums[left]] = [nums[left],nums[right]]
        left++
        right--
    }
    return nums
    
};
// 复原IP地址
var restoreIpAddresses = function(s) {
    let result = []
    let len = s.length
    function dfs(subArr,start){
        // 递归结束
        if(subArr.length===4&&start===len){
            result.push(subArr.join('.'))
        }
        if(subArr.length===4&&start <len) return
        for(let i = 1; i<=3;i++){
            if(start+i-1>=len) return // 越界
            if(i!==1 && s[start] == 0) return  //不能有0xx
            let temp = s.substring(start,start+i)
            if(i===3&&+temp>255) return
            subArr.push(temp)
            dfs(subArr,start+i)
            subArr.pop()
        }
    }
    dfs([],0)
    return result
}
//122-买卖股票2-
//给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计算法获取最大利润
var maxProfit = function(prices) {
    if(!prices || prices.length <= 1) return 0
    let len  = prices.length
    let profits = 0
    for(let i = 1; i<len;i++){
        if(prices[i] > prices[i-1]){
            profits += prices[i] - prices[i-1]
        } 
    }
    return profits
};
// 209-长度最小的子数组-【medium】
// 数组中满足其和 ≥ target 的长度最小的 连续子数组
var minSubArrayLen = function(target, nums) {
    let len = nums.length
    let  i = 0;
    let  j = 0;
    let sum =  0
    let minLen = Infinity
    while(i<len){
        sum += nums[i]
        while(sum >= target){
            sum -= nums[j]
            minLen = Math.min(minLen,i-j+1)
            j++
        }
        i++
    }
    return minLen === Infinity ? 0 : minLen;// 从未找到可行解，返回0
};
// 比较版本号
function sortVersion(list){
    let bigList = list.map(item => item.replace(/\d+/g, n => +n + 100000))
    return bigList.sort().map(item => item.replace(/\d+/g, n => +n -100000))
}
// 零钱兑换2
var change = function(amount, coins) {
    let dp = []
    let len = coins.length
    for(let i = 0; i<len+1;i++){ // len+1因为最后答案要选择第len个
        dp[i] = [];
        for(let j = 0; j < amount+1;j++){
            if(i===0){
                dp[0][j] = 0 // 不选硬币是不可能凑出金额为j
            } 
            if(j===0){
                dp[i][0] = 1 // 金额总数为0只有一种可能，就是不选硬币
            }else{
                dp[i][j] = 0 // 初始化为0
            }
        }
    }
    for(let i = 1; i < len+1;i++){ // 这里i代表第一个
        for(let j = 1; j < amount+1;j++){
            if(j - coins[i-1] < 0){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]]
            }
        }
    }
    return dp[len][amount]
};
// 斐波那契
var fib = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    let one = 0 
    let two = 1
    let res ;
    for(var i = 1; i < n; i++){
    res = (one + two)%1000000007
    one = two
    two = res
    }
    return res
  
  };
  // 乘积最大的数组
  var maxProduct = function(nums) {
   let preMin = nums[0]
   let preMax = nums[0]
   let res = nums[0]
   for(let i = 1;i < nums.length;i++){
       let val = nums[i]
       let temp1 = preMin*val
       let temp2 = preMax*val
       preMin = Math.min(temp1,val,temp2)
       preMax = Math.max(temp1,val,temp2)
       res = Math.max(res,preMax)
   }
};
//322-零钱兑换-【medium】
var coinChange = function(coins, amount) {
    let len = coins.length
    let count = 0
    let res = Infinity
    function dfs(amount,idx,count){
        if(amount === 0){
            return Math.min(res,count)
        }
        if(idx === len) return
        for(let n = amount/coins[idx] | 0; n >=0 && count+n<res;n--){
            dfs(amount - n*coins[idx],idx+1,amount+n)
        }
    }
    dfs(amount,0,0)
    return res === Infinity ? -1 : res
}
// 347-前k个高频元素-topKFrequent-【medium】
var topKFrequent = function(nums, k) {
    let map  = new Map()
    for(let val of nums){
        if(map.has(val)){
            let count = map.get(val)
            map.set(val,++count)
        }else{
            map.set(val,1)
        }
    }
    let list = []
    for( [key,val] of map){
        list.push({key,val})
    }
    list.sort((a, b) =>  b.val-a.val) // 降序排列
    let target = list.slice(0,k)
    return target.map(item =>  item.key)
 
 
 };
 // 448-找到数组中消失的数-【easy】
 var findDisappearedNumbers = function(nums) {
     let res = new Array(nums.length).fill(0)
     for(let i = 0; i < nums.length;i++){
         if(res[i] === 0){
             res[i] = i+1 //从1开始计数的
         }
         res[nums[i]-1] = -1
     }
     return res.filter(item => item !== -1)
 }
 //287-寻找重复数-【medium】
 var findDuplicate = function(nums) {
    //数组索引值范围0到n, 元素数值范围1到n 小于索引范围, 故可以用数组元素的值当作链表指针
    let L = R = 0, begin
    while (1) {
        L = nums[L]
        R = nums[nums[R]]
        if (L === R) {
            begin = 0
            while (begin !== L) {
                begin = nums[begin]
                L = nums[L]
            }
            return begin
        }
    }
};

