
// 数值的n次方
// 关键，n的类型判断
function myPow(x,n) {
  if(n === 0) return 1
  if(n === 1) return x
  if(n < 0) return 1/myPow(x,-n)
  if(n % 2 === 1) return x*myPow(x,n-1)
  if(n % 2 === 0) {
    let res = myPow(x,n/2)
    return res*res
  }
  
}

