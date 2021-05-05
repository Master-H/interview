/*
 * @Author: xxx
 * @Date: 2020-12-27 11:33:23
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-27 10:46:41
 * @Description: 文件功能描述
 */
// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
// 示例 1:
// 输入: "(()"
// 输出: 2
// 解释: 最长有效括号子串为 "()"
// 示例 2:
// 输入: ")()())"
// 输出: 4
// 解释: 最长有效括号子串为 "()()"

const longestValidParentheses = (s) => {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c == '(') {       // 左括号的索引，入栈
        stack.push(i);
      } else {              // 遍历到右括号
        stack.pop();        // 栈顶的左括号被匹配，出栈
        if (stack.length) { // 栈未空
          const curMaxLen = i - stack[stack.length - 1]; // 计算有效连续长度
          maxLen = Math.max(maxLen, curMaxLen);          // 挑战最大值
        } else {            // 栈空了
          stack.push(i);    // 入栈充当参照
        }
      }
    }
    return maxLen;
  };
