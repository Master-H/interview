Function.prototype.myCall = function(obj,...args){
    obj.fn = this
    obj.fn(...args)
    delete(obj.fn)
}