module.exports = function reverse (n) {
    let str = Math.abs(n).toString()
    let newString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return +newString;
}
