// typeJudge
function typeJudge(type){
    return Object.prototype.toString.call(type).match(/\s+(\w+)/)[1]
}

let map = new Map()
let bigInt = BigInt(2)
console.log(typeJudge(map)); // Map
console.log(typeJudge(bigInt)); // BigInt