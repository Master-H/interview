Function.prototype.myBind = function(obj,...args1){
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }
    let _this = this
    let _ctx = obj || window
    return function fn(...args2){
        let args = args1.concat(args2)
        return _this.apply(this instanceof fn ? this : _this ,args)
    }
}
