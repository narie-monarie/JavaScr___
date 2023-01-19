"use strict";
exports.__esModule = true;
exports.insertionSort = void 0;
var insertionSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
    }
    return arr;
};
exports.insertionSort = insertionSort;
console.log((0, exports.insertionSort)([2, 1, 9, 76, 4]));
