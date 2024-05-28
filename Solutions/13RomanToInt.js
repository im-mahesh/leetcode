/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanLetters = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let current = 0;
    let total = 0;
    let prev = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        current = romanLetters[s[i]];

        if (current < prev) {
            total -= current;
        } else {
            total += current;
        }
        prev = current;
    }
    return total;
};

romanToInt("III"); // 3
romanToInt("LVIII"); // 58
romanToInt("MCMXCIV"); // 1994