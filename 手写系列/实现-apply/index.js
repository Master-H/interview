// apply
Function.prototype.myApply = function(obj,args){
    obj.fn = this
    obj.fn(args)
    delete(obj.fn)
}