const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    } else if (index == 0) {
        return 0;
    }
    
    let fib = [1, 1];
    while (fib.length < index) {
        fib.push(fib.slice(-2).reduce((acc, cur) => acc + cur));
    }
    return fib.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
