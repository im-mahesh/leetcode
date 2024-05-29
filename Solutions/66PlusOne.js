/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // const number = Number(digits.filter(o=>!isNaN(o)).join(''));
    // return (number+1).toString().split("");
    // Start from the last digit
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};