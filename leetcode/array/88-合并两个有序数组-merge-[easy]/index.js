// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明：

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

// 示例：
// 输入：
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// 输出：[1,2,2,3,5,6]


// 方法一：（m+n)log(m+n)
var merge = function(nums1, m, nums2, n) {
    let res = Array(m+n).fill(0)
    nums1 = nums1.sort((a, b) => a-b)
    nums2 = nums2.sort((a, b) => a-b)
    for(let i = 0 ,j = 0; i< m,j < n;i++,j++){
        if(nums1[i] <nums2[j]<nums1[i+1]){
            nums1[i+1] = nums2[j]
        }
    }
};

// 时间复杂度：m+n
var merge = function(nums1, m, nums2, n) {
    let len1 = m -1
    let len2 = m -2
    let len = len1+len2
    nums1[len--] = nums1[len1--] > nums2[len2--] ? nums1[len1--] : nums2[len2--]
    return nums1.splice(0,len2+1,nums2.slice(0,len2+1)) // nums2存在全部小于nums1或者部分小于，所以得🉐️把剩余得给补上去
};
console.log(merge([1,2,3,0,0,0],3,[4,5,6],3));

var merge = function(nums1, m, nums2, n) {
    let len1 = m -1
    let len2 = n -1
    let len = m+n-1
    while(len1>=0&&len2>=0){
         nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
    }
    nums1.splice(0,len2+1,...nums2.slice(0,len2+1)) // nums2存在全部小于nums1或者部分小于，所以得🉐️把剩余得给补上去
};

