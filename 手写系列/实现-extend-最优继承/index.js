function myExtend(child,parent){
    let empty = function(){}
    empty.prototype = parent.prototype
    child.prototype = new empty()
    child.prototype.constructor = child
}