//  时间戳立即执行一次
function throttle(fn,time){
    let pre = 0
    return function(...args){
        let now = Date.now()
        if(now - pre > time){
            fn.apply(this,args)
            pre = now
        }
    }
}
// 定时器
function throttle(fn,time){
    let timer = null
    return function(...args){
        if(!timer){
            timer = setTimeout(() => {
                fn.apply(this,args)
                timer = null
            },time)
        }
       
    }
   
}