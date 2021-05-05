
// 数组每个坐标的元素就是他排序的位置，如果不是就交换，进尔达到目的
function insertSort(arrayList) {
  for(let i = 0 ;i < arrayList.length - 1; i++){
    for(let j = i + 1; j > 0; j--){
      if(arrayList[j] < arrayList[j-1]){
        let temp = arrayList[j]
        arrayList[j] = arrayList[j-1]
        arrayList[j-1] = temp
      }

    }
    
  }
  return arrayList
}

 const arr = [3, 77, 66, 55];
 const res = insertSort(arr);
 console.log(res);
 

