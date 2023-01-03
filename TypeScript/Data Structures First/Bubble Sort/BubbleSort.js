function bubbleSort(arr) {
    var noSwaps;
    var swap = function (arr, idx1, idx2) {
        var _a;
        _a = [arr[idx2], arr[idx1]], arr[idx1] = _a[0], arr[idx2] = _a[1];
    };
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps)
            break;
    }
    return arr;
}
console.log(bubbleSort([1, 2, 3, 4, 6, 5]));
