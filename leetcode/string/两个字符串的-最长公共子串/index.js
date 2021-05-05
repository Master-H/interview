/*
 * @Author: xxx
 * @Date: 2021-01-31 21:12:40
 * @LastEditors: xxx
 * @LastEditTime: 2021-02-01 10:56:10
 * @Description: 文件功能描述
 */
function findLongestCommonStr(str1,str2){
    let len1 = str1.length
    let len2 = str2.length
    let shortStr = len1 > len2 ? str2 : str1
    let longStr = len1 > len2 ? str1 : str2
    let result = ''
    // 公共子串长度
    for(let i =  shortStr;i>0;i--){
        // 长度为i有shortStr - i种可能
        for(let j = 0; j <= shortStr - i;j++){
            result = shortStr.substring(j,i)
            if(longStr.includes(temp)) return result
        }
    }
    return result
}