/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let aLast = a.length - 1;
    let bLast = b.length - 1;
    let remainder = 0;
    let result = '';
    while (aLast >= 0 || bLast >= 0 || remainder) {
        let sum = remainder;
        if (aLast >= 0) {
            sum += Number(a[aLast])
            aLast--;
        }
        if (bLast >= 0) {
            sum += Number(b[bLast])
            bLast--;
        }
        remainder = Math.floor(sum / 2);
        result = (sum % 2) + result;
    }
    return result
};