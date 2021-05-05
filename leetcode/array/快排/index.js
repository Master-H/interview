
// 二分递归
function quickSort(arrayList) {
  if (arrayList.length === 0 || arrayList.length === 1) return arrayList;
  const mid = Math.floor(arrayList.length / 2);
  const midValue = arrayList.splice(mid,1)[0] //直接 nums[mid]会出现无限递归，因为如果数组[2,2,2]，那么右边的长度一直是【2，2，2】
  const left = [];
  const right = [];
  arrayList.map(item => {
    if (item < midValue) left.push(item);
    if (item > midValue) right.push(item);
  });
  return quickSort(left).concat( midValue, quickSort(right));
}
const arr = [3, 77, 66, 55];

