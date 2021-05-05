

// 解法1，递归，n很大可能会溢出
function fibonacci(n) {
  if(n<=1) return n
  return fibonacci(n-1) + fibonacci(n-2)
  
}
// 解法1，优化，但是可能会计算超时,因为重复计算的原因
let MAX = 1000000007;
function fibonacci(n) {
  if(n<=1) return n
  return (fibonacci(n-1)%MAX) + (fibonacci(n-2)%MAx)
  
}

// 解法最优：
// 取模原因防止溢出
// 为什么总是1000000007呢= =
// 大概≖‿≖✧是因为：
// 1.1000000007是一个质数
// 2.int32位的最大值为2147483647，所以对于int32位来说1000000007足够大
// 3.int64位的最大值为2^63-1，对于1000000007来说它的平方不会在int64中溢出
// 所以在大数相乘的时候，因为(a∗b)%c=((a%c)∗(b%c))%c，所以相乘时两边都对1000000007取模，再保存在int64里面不会溢出

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