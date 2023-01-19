"use strict";
exports.__esModule = true;
exports.selectionSort = void 0;
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; i++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        console.log(arr);
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        console.log(arr);
    }
    return arr;
}
exports.selectionSort = selectionSort;
console.log(selectionSort([19, 44, 38, 5, 47, 15]));
