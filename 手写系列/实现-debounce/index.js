function debounce(fn,delay,immediate){
    let timer = null
    return function(...args){
        let context = this
        if(timer) clearTimeout(timer);
        if(immediate){
            let doNow = !timer
            timer = setTimeout(() =>{
                timer = null
            },delay)
            if(doNow){
                fn.apply(context,args)
            }
        }else{
            timer = setTimeout(() =>{
                fn.apply(context,args)
                timer = null
            },delay)
        }
    }
}