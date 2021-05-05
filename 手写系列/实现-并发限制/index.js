
function concurrenceLimits(tasks,limit){
    let result = []
    let count = 0
    let queue = []
    let len = tasks.length
    function run(){
        if(count === len){
            return Promise.resolve()
        }
        let task = tasks[count++]
        let taskPromise = Promise.resolve(task())
        result.push(taskPromise)
        let _taskPromise = taskPromise.then(() => {
            queue.splice(queue.indexOf(_taskPromise),1)
        })
        queue.push(_taskPromise)
        let p = Promise.resolve()
        if(queue.length >=limit){
            p = Promise.race(queue)
        }
        return p.then(()=> run())
    }
    return run().then(()=> Promise.all(result))
}