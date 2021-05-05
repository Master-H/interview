

// 每一次最大的冒泡到数组末尾
function bubble(arrayList) {
 for(let i = 0 ;i < arrayList.length; i++){
   for(j = 0; j< arrayList.length - 1- i; j++){
    if(arrayList[j] > arrayList[j+1]){
      let temp = arrayList[j]
      arrayList[j] = arrayList[j+1]
      arrayList[j+1] = temp
    }
   }
 }
 return arrayList
}
const arr = [3, 77, 66, 55];

const res = bubble(arr);

console.log(res);
