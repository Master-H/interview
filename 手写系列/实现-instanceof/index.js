function myInstanceof(left,right){
    let _left = left._proto_
    let _right = right.prototype
    while(true){
       if(_left === null) return false
       if(_left === _right) return true
       _left = _left._proto_
    }
}