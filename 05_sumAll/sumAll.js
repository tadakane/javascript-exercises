const sumAll = function(num1, num2) {
    let sum = 0;
    let i = num1;
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }
    while (i !== num2) {
        sum += i;
        if (num1 > num2) 
            i--;
        else
            i++;
    }
    sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
