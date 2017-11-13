function sortASC() {
    var myArray = [10, 4, 2, 5, 6];
    var isMyArray = Array.isArray(myArray);
    return isMyArray ? myArray.sort(function (a, b) { return a - b; }) : 0;
}
function sortDESC() {
    var myArray = [10, 4, 2, 5, 6];
    var isMyArray = Array.isArray(myArray);
    return isMyArray ? myArray.sort(function (a, b) { return b - a; }) : 0;
}
function reverseWordOrder(string) {
    return string.split(' ').reverse().join(' ');
}
exports.sortASC = sortASC();
exports.sortDESC = sortDESC();
exports.reverseWordOrder = function (string) { return reverseWordOrder(string); };
