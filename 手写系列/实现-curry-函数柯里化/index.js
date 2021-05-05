function myCurry(fn,args1){
    return function(...args2){
        let args = args1 === undefined ? args2 : args2.concat(args2)
        if(args.length < fn.length){
            return myCurry(fn,args)
        }
        return fn.apply(null,args)
    }
}