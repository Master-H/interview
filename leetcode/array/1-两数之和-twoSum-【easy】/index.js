function twoSum(array,target){
    let obj = {}
    for(let [index,value] of array.entries()){
        let remain = target - value
        if(obj[remain] === undefined){ 
             obj[value] = index
        }else{
            return [obj[remain],index]
        } 
       
    }
}