// 实现lazyMan('Lazy').eat('test').firstSleep(1).eat('apple').sleep(2).eat('orange')
function lazyMan(name){
    return new _lazyMan(name)
}
function _lazyMan(name){
    let flag = Promise.resolve()
    this.name = name
    this.fun_stack = []
    let self = this
    function fn(){
        console.log('我的名字是' + self.name)
        return Promise.resolve()
    }
    this.fun_stack.push(fn)


    setTimeout(function(){
        self.fun_stack.forEach(fn => {
            flag = flag.then(fn)
        })
    })
}
_lazyMan.prototype.sleep = function(time){
    let self = this
    function fn(){
        return new Promise(function(resolve){
            console.log(self.name + '再次睡觉')
            setTimeout(function(){
                console.log(self.name + '再次睡醒')
                resolve()

            }, time * 1000)
        })
    }
    this.fun_stack.push(fn)
    return this
}
_lazyMan.prototype.firstSleep = function(time){
    let self = this
    function fn(){
        return new Promise(function(resolve){
            console.log(self.name + '第一次睡觉')
            setTimeout(function(){
                console.log(self.name + '第一次睡醒了')
                resolve()

            }, time * 1000)
        })
    }
    this.fun_stack.unshift(fn)
    return this
}
_lazyMan.prototype.eat = function(food){
    let self = this
    function fn(){
        console.log(self.name + '正在吃' + food)
        return Promise.resolve()
    }
    this.fun_stack.push(fn)
    return this
}
// 测试



lazyMan('Lazy').eat('test').firstSleep(1).eat('apple').sleep(2).eat('orange')