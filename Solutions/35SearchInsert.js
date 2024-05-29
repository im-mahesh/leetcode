/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // let i=0;
    // for(i; i<nums.length; i++) {
    //     if(nums[i] === target || nums[i]>target) return i;
    // }
    // return i;
    let left = 0;
    let right = nums.length - 1;
    do {
        let half = Math.floor((left + right) / 2);
        if (nums[half] === target) return half;
        else if (nums[half] < target) {
            left = half + 1;
        } else {
            right = half - 1;
        }
    }
    while (left <= right)
    return left;
};