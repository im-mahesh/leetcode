var divide = function (dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647
    if (Math.abs(divisor) === 1) return dividend * divisor;

    let isNegative = false;
    let count = 0;

    if ((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0))
        isNegative = true;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        let x = 1;
        base = divisor;
        console.log("loop 1", x, base, count, dividend);
        while (base <= (dividend >> 1)) {
            console.log("loop 2-a", x, base, count, dividend)
            base = base << 1;
            x = x << 1;
            console.log("loop 2", x, base, count, dividend)
        }
        count += x;
        dividend -= base;
    }
    console.log("result", count);
    if (isNegative) return -count;
    return count;
}