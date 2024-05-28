/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefixString = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefixString.length && j < strs[i].length && prefixString[j] === strs[i][j]) {
            j++;
        }
        prefixString = prefixString.slice(0, j);
        if (prefixString === "") return "";
    }
    return prefixString;
};






//BEST SOLUTION
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};