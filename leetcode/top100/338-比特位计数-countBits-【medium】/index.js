/*
 * @Author: xxx
 * @Date: 2021-01-02 23:10:10
 * @LastEditors: xxx
 * @LastEditTime: 2021-01-02 23:26:39
 * @Description: 文件功能描述
 */
var countBits = function(num) {
    let res = []
    let n = 0
    while(n<=num){
        let matchList = n.toString(2).match(/1/g) || []
        res.push(matchList.length)
        n++
    }
    return res

};