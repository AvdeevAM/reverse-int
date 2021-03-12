module.exports = function reverse (num) {
    var result = num.toString().split('').reverse().join('');
    return parseInt(result);
    }
