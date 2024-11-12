const palindromes = function (str) {
    const cleanedString = str.toLowerCase().split("").filter(char => char.match("[\\w\\d]")).join("");
    const reversedString = cleanedString.split("").reverse().join("");
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
