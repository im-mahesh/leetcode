/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums.length) return 0;
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[j] !== nums[i]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};

// Approach Explanation:
// We maintain two pointers:
// i, the slow pointer, represents the position where the next non-duplicate element should be placed.
// j, the fast pointer, iterates through the array to find non-duplicate elements.
// Start the fast pointer j from index 1 (as we compare each element with its previous one).
// If nums[j] is different from nums[i], it means we've found a new non-duplicate element.
// Increment i to move it to the next position, and copy nums[j] to nums[i].
// Repeat this process until j reaches the end of the array.
// The length of the new array (after removing duplicates) is the position of the slow pointer i plus 1, as i represents the last non-duplicate element's index.
// Return the length of the new array.
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