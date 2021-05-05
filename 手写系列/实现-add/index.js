// 实现add(1).add(2).add(3)
function _add(num){
    this.sum = 0
    this.sum += num  
    return this
}
_add.prototype.add = function(num){
    this.sum += num
    return this
}
 function add(){
     return new _add(2)
 }
let res = add(2).add(4)
console.log(res.sum); //6
