// 给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。

// 若这两个字符串没有公共子序列，则返回 0。

//  

// 示例 1:

// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace"，它的长度为 3。
// 示例 2:

// 输入：text1 = "abc", text2 = "abc"
// 输出：3
// 解释：最长公共子序列是 "abc"，它的长度为 3。
// 示例 3:

// 输入：text1 = "abc", text2 = "def"
// 输出：0
// 解释：两个字符串没有公共子序列，返回 0。
//参考：https://leetcode-cn.com/problems/longest-common-subsequence/solution/zui-chang-gong-gong-zi-xu-lie-by-xing-guang-29/
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