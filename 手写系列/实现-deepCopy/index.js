
function deepCopy(target){
    if(target instanceof Object){
        if(target instanceof Function){
            return function(){
                target.call(this,...arguments)
            }
        }
        if(target instanceof RegExp) return new RegExp(target.source,target.rule)
        if(target instanceof Date) return new Date(target)
        if(target instanceof Map) return new Map(target)
        if(target instanceof Set) return new Set(target)
        let copy = Array.isArray(target) ? [] : {}
        for(let key in target){
            if(target.hasOwnProperty(key)){
                copy[key] = deepCopy(target[key])
            }
        }
        return copy
    }else{
        return target
    }
}
let set = new Set([1])
let map = new Map([[1,2]])
let obj = {
    a: BigInt(22),
    b: Symbol(2),
    c: set,
    d:map
}

let copy = deepCopy(obj)
copy.c.add(88)
console.log('copy',copy);
console.log('obj',obj);