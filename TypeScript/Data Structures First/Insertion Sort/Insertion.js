"use strict";
exports.__esModule = true;
exports.insertionSort = void 0;
var insertionSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var j = i - 1;
        while (j >= 0 && arr[j + 1] < arr[j]) {
            var tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
            j--;
        }
    }
    return arr;
};
exports.insertionSort = insertionSort;
console.log((0, exports.insertionSort)([2, 1, 9, 76, 4]));
