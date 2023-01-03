function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; i++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
    }
    return arr
}

console.log(selectionSort([19, 44, 38, 5, 47, 15]))