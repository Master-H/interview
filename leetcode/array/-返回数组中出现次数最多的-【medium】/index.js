function maxRepeat(arr){
    let map = new Map()
    let set = new Set()
    let max = 1
    for(let val of arr){
        let count  = map.get(val)
        !count ? map.set(val,count+1) : map.set(val,1)
        if(count+1 >= max){
            set.add(val)
            max = count+1
        }
    }
}