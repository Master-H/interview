
// 归并排序
// 思想： 二分拆排序，然后合并

// 排序
function sort(left,right) {
  let result = []
 if(left.length > 0 && right.length >0){
   if(left[0] < right[0]) result.push(left.shift())
   if(left[0] < right[0]) result.push(right.shift())
 }
 return result.concat(left,right)
}

// 归并
function mergeSort(arr){
  if(arr.length === 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid,arr.length)
  sort(mergeSort(left),mergeSort(right))
}
const arr = [3, 77, 66, 55];

const res = quickSort(arr);

console.log(res);
