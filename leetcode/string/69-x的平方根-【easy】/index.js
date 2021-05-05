// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:

// 输入: 4
// 输出: 2
// 示例 2:

// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 
//      由于返回类型是整数，小数部分将被舍去。
const mySqrt = (x) => {
    if (x < 2) return x;
    let left = 1;
    let right = x >>> 1;        // 除以2并取整，缩小一下遍历的范围
    while (left + 1 < right) {  // 退出循环时，它们相邻
      let mid = (left + right) >>> 1;
      if (mid == x / mid) {
        return mid;
      } else if (mid < x / mid) {
        left = mid;
      } else {
        right = mid;
      }
    }
    return right > x / right ? left : right;
  };
  
 
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