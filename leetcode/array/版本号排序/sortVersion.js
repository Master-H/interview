var arr = ['5.5.1', '4.212.0', '4.22.0', '6.1.0', '5.1.0', '4.5.0'];
// 思路，sort逐位比较，当第一个字符串一样，那么久比较第二个，所以给每个版本号加上足够大的数，即可
let bigArr = arr.map( a => a.replace(/\d+/g, n => +n+100000 ) )
// bigArr变成下面字符串，就可以利用sort逐位比较
// [
//     '100005.100005.100001',
//     '100004.100021.100000',
//     '100004.100022.100000',
//     '100006.100001.100000',
//     '100005.100001.100000',
//     '100004.100005.100000'
//   ]
// sort比较后复原
arr = bigArr.sort().map( a => a.replace(/\d+/g, n => +n-100000 ) );
         
