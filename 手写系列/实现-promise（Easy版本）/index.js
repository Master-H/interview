// promise easy
class MyPromise{
    constructor(executor){
        this.value = null
        this.error = null
        this.state = PENDING
        this.fulfilledQueue = [] // 成功队列，存异步任务
        this.rejectQueue = [] // 失败队列，存异步任务
        const resolve = (value) => {
            if(this.state === PENDING){
                this.state = FULFILLEd
                this.value = value
                this.fulfilledQueue.forEach(fn => {
                    fn(this.value)
                })
            }
        }
        const reject = (error) => {
            if(this.state === PENDING){
                this.state = REJECT
                this.error = error
                this.rejectQueue.forEach(fn => {
                    fn(this.error)
                })
            }
        }
        try {
            executor(resolve,reject)
        } catch (error) {
            this.error = error
        }
    }
   
    then(onFulfilled,onRejected) {
        const nextPromise = new Promise((resolve,reject) => {
            if(this.state === FULFILLEd){
                onFulfilled(this.value)
                
            }else if(this.state === REJECT){ 
                onRejected(this.error);
            }else{ // 异步任务入队列
                //将回调函数保存在回调数组中   
                this.onFulfilledCallbacks.push(onFulfilled)
                this.onRejectedCallbacks.push(onRejected)
            }
        })
        return nextPromise
       
    }
    // 静态方法直接调用
    static race(promiseList){
        // race返回的也是Promise
        return new Promise((resolve,reject) => {
            if (promises.length === 0) return;
            for(let item of promiseList){
                if(item instanceof Promise){
                    item().then(res => {
                        resolve(val)
                        return
                    }).catch((err) => {
                      reject(err)  
                    })
                }else{
                    resolve(item)
                }
            }
        })

    }
    static all(promiseList){
        if(!Array.isArray(promiseList)){
             throw new Error('必须是数组')
        }
        let len  = promiseList.length
        let resultQueue =  new Array(promiseList.length)
        let count = 0
        return new Promise((resolve,reject) => {
            for(let [idx,item] of promiseList.entries()){
                if(item instanceof Promise){
                    item.then(res => {
                        resultQueue[idx] = res
                        count++
                    }).catch(err=> reject(err))
                }else{
                    resultQueue[idx] = item
                    count++
                }
            }
            // 所有满足
            if(count===len){
                resolve(resultQueue)
            }
        })
    }
    static resolve(val){
        if(val instanceof Promise) return val
        return new Promise(res = res(val))
    }
    static reject(val){
        return new Promise((res,rej) = rej(val))
    }
    catch(onReject){
        this.then(null,onReject)
    }
}
