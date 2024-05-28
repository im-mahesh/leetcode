/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};

// Approach Explanation:
// We maintain two pointers:
// i, the slow pointer, represents the position where the next non-target element should be placed.
// j, the fast pointer, iterates through the array to find non-target elements.
// Start both pointers from index 0.
// If nums[j] is not equal to the target value val, it means we've found a non-target element.
// Copy nums[j] to nums[i] and increment i to move it to the next position.
// Repeat this process until j reaches the end of the array.
// Return the value of i, which represents the length of the new array after removing the target value.
// This approach has a time complexity of 
// �
// (
// �
// )
// O(n), where 
// �
// n is the length of the input array nums, as we iterate through each element once. The space complexity is 
// �
// (
// 1
// )
// O(1) as we do not use any extra space proportional to the input.