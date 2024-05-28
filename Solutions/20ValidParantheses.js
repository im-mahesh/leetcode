/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const mapping = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (mapping[s[i]]) {
            stack.push(s[i]);
        } else {
            const last = stack.pop();
            if (mapping[last] !== s[i]) return false;
        }
    }
    return stack.length === 0;
};