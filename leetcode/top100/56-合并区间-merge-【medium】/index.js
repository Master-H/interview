/*
 * @Author: xxx
 * @Date: 2020-12-29 22:33:39
 * @LastEditors: xxx
 * @LastEditTime: 2020-12-29 23:25:47
 * @Description: 文件功能描述
 */
// 给出一个区间的集合，请合并所有重叠的区间。
// 示例 1:
// 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2:
// 输入: intervals = [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
// 注意：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。

var merge = function(intervals) {
    // 先排序
    if(intervals.length === 0) return []
    
    intervals.sort((a, b) => a[0] - b[0])
    let res = [intervals[0]]
    
    for(let i =  1; i < intervals.length;i++){
        if(res[res.length-1][1]  < intervals[i][0]){
            res.push(intervals[i])
        }else{
            if(res[res.length-1][1] < intervals[i][1]){
                res[res.length-1][1] = intervals[i][1]
            }
        }
    }
    return res
};
