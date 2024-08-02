const palindromes = function (str) {
    const re = new RegExp("^[a-zA-Z0-9]+$");
    let strArray = str.toLowerCase().split("").filter(x => re.test(x));
    let newStr = strArray.join("");
    strArray.reverse();
    let revStr = strArray.join("");
    return newStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
