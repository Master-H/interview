var Solution = function(nums) {
    this.nums = nums;
};
Solution.prototype.reset = function() {
    return this.nums;
};
Solution.prototype.shuffle = function() {
    let arr = [... (this.nums)];
    let len =arr.length;
    for(let i =0 ; i < len; i++){ // 洗牌算法 ，保证了每个数在每个位置的概率都是相同的
        rand_num = Math.floor(Math.random() * (len - i) + i);

        [ arr[i] , arr[rand_num] ]= [arr[rand_num] , arr[i] ]; 
    }
    return arr;
};

