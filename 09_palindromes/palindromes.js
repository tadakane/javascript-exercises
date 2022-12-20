const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9 ]/g, '');
    str = str.replace(/\s/g, '');
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length-(i+1)])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
